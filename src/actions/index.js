import * as types from '../constants/ActionTypes.js';

export const addComment = (userName, message) => ({ type: types.ADD_COMMENT, userName, message });
export const loadComments = () => ({ type: types.LOAD_COMMENTS });
