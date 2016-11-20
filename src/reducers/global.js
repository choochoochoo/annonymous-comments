import { SHOW_COMMENT_DIALOG, HIDE_COMMENT_DIALOG } from '../constants/ActionTypes.js';

const initialState = {
    commentFormOpen: false,
    targetCommentId: null
};

export default function comments(state = initialState, action) {
    switch (action.type) {
        case SHOW_COMMENT_DIALOG:
            return { ...state, commentFormOpen: true, targetCommentId: action.targetCommentId };
        case HIDE_COMMENT_DIALOG:
            return { ...state, commentFormOpen: false, targetCommentId: null };
        default:
            return state;
    }
}