import { ADD_COMMENT, LOAD_COMMENTS } from '../constants/ActionTypes.js';
import { getNodeFromArrayById } from '../helpers/helper.js';

const initialState = [];

export default function comments(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMMENTS:
            return action.comments;

        case ADD_COMMENT: {
            if (action.parentId) {
                const newState = [...state];

                getNodeFromArrayById(newState, action.parentId)
                    .childComments.push({
                        id: action.id,
                        message: action.message,
                        userName: action.userName,
                        date: action.date,
                        childComments: []
                    });

                return newState;
            }

            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    userName: action.userName,
                    date: action.date,
                    childComments: []
                }
            ];
        }

        default:
            return state;
    }
}
