import * as types from '../constants/ActionTypes.js';

export const addComment = (parentId, userName, message, date, childComments) =>
    ({ type: types.ADD_COMMENT, parentId, userName, message, date, childComments });
export const loadComments = () => ({ type: types.LOAD_COMMENTS });
