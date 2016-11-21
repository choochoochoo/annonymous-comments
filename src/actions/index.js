import * as types from '../constants/ActionTypes.js';

export const addComment = (id, userName, message, date, parentId) =>
    ({ type: types.ADD_COMMENT, id, userName, message, date, parentId });

export const loadComments = comments => ({ type: types.LOAD_COMMENTS, comments });

export const showCommentDialog = (targetCommentId = null) =>
    ({ type: types.SHOW_COMMENT_DIALOG, targetCommentId });

export const hideCommentDialog = () => ({ type: types.HIDE_COMMENT_DIALOG });
