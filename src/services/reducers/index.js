import * as types from '../types/types';

const initialState = {
  articles: [],
  err: ""
};

function rootReducer(state = initialState, action) {
  if(action.type === types.ADD_ARTICLE)
   return Object.assign(
    {}, state, {
     articles: state.articles.concat(action.payload),
    err: ""});
  if(action.type === types.DELETE_ARTICLE)
  return Object.assign(
    {}, state, {
      articles: state.articles.filter(article =>{
       return article.id !== action.payload.id
      }),
      err: ""
    });
    if(action.type === types.EDIT_ARTICLE)
    return Object.assign(
      {}, state, {
        articles: state.articles.splice(action.payload.id, 1),
        err: ""
      }
    )
    if(action.type === types.NO_EMPTY_INPUT){
      return Object.assign(
        {}, state, {
          articles: state.articles,
          err: "No Input Entered!"
        }
      )
    }
    if(action.type === types.DUPLICATE_INPUT){
      return Object.assign(
        {}, state, {
          articles: state.articles,
          err: "Duplicate Entry Entered!"
        }
      )
    }
  return state;
};
export default rootReducer;
