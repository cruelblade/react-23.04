import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import notification from './middleware/notification';

const logger = createLogger({ collapsed: true });

const store = createStore(rootReducer, applyMiddleware(thunk, logger, notification));

export default store;
