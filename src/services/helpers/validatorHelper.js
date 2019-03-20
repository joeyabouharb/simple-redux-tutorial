
import * as actions from '../types/types';


function validateArticle({dispatch, getState}) {

  return function(next){
    return function(action){
      // do your stuff
      if(action.type === actions.ADD_ARTICLE){
        const title = action.payload.title
        if (!title.length ||
          !(/\S/.test(title))) {
          return dispatch({ type: actions.NO_EMPTY_INPUT});
        }
        const articles = getState().articles;
        const findDuplicate = function(article) {
          return article.title === action.payload.title;
        }
        if(articles.some(findDuplicate)){
          return dispatch({type: actions.DUPLICATE_INPUT});
        }
      }
     
      return next(action);
    }
  }
}
export default validateArticle;
