import {applyMiddleware, createStore} from 'redux';
import rootReducer from "../reducer";
import {createLogger} from 'redux-logger';

const logger = createLogger({collapsed: true});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;