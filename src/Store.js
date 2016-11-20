import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const logger = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
);

export default store;
