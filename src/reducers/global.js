import {
    SHOW_COMMENT_DIALOG,
    HIDE_COMMENT_DIALOG,
    SHOW_PROGRESS,
    HIDE_PROGRESS
} from '../constants/ActionTypes.js';

const initialState = {
    commentFormOpen: false,
    progressFormOpen: false,
    targetCommentId: null
};

export default function comments(state = initialState, action) {
    switch (action.type) {
        case SHOW_COMMENT_DIALOG:
            return { ...state, commentFormOpen: true, targetCommentId: action.targetCommentId };
        case HIDE_COMMENT_DIALOG:
            return { ...state, commentFormOpen: false, targetCommentId: null };
        case SHOW_PROGRESS:
            return { ...state, progressFormOpen: true };
        case HIDE_PROGRESS:
            return { ...state, progressFormOpen: false };
        default:
            return state;
    }
}