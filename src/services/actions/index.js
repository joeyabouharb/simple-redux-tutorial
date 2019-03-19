import * as types from '../types/types';

export function addArticle(payload) {
  return { type: types.ADD_ARTICLE, payload }
};

export function deleteArticle(payload) {
  return {type: types.DELETE_ARTICLE, payload}
}