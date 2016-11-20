import * as types from '../constants/ActionTypes.js';

export const addComment = (parentId, userName, message) =>
    ({ type: types.ADD_COMMENT, parentId, userName, message });
export const loadComments = () => ({ type: types.LOAD_COMMENTS });
