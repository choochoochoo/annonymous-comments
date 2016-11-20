import * as types from '../constants/ActionTypes.js';

export const addComment = (parentId, userName, message) =>
    ({ type: types.ADD_COMMENT, parentId, userName, message });
export const loadComments = comments => ({ type: types.LOAD_COMMENTS, comments });
export const showCommentDialog = (targetCommentId = null) => ({ type: types.SHOW_COMMENT_DIALOG, targetCommentId });
export const hideCommentDialog = () => ({ type: types.HIDE_COMMENT_DIALOG });
