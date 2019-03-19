import * as types from '../types/types';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if(action.type === types.ADD_ARTICLE)
   return Object.assign(
    {}, state, {
     articles: state.articles.concat(action.payload)});
  if(action.type === types.DELETE_ARTICLE)
  return Object.assign(
    {}, state, {
      articles: state.articles.filter(article =>{
       return article.id !== action.payload.id
      })
    });
    if(action.type === types.EDIT_ARTICLE)
    return Object.assign(
      {}, state, {
        articles: state.articles.splice(action.payload.id, 1)
      }
    )
  return state;
};
export default rootReducer;
