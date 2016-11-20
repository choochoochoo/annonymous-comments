import { combineReducers } from 'redux';
import comments from './comments.js';
import global from './global.js';

const rootReducer = combineReducers({
    global,
    comments
});

export default rootReducer;
