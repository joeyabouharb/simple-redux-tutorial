
import * as actions from '../types/types';
const forbiddenWords = ["spam", "money"];

function validateArticle({ dispatch }) {
  return function(next){
    return function(action){
      // do your stuff
      if(action.type === actions.ADD_ARTICLE){
      const foundWord = forbiddenWords.filter(word =>
        action.payload.title.includes(word)); 
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
     
      return next(action);
    }
  }
}
export default validateArticle;
