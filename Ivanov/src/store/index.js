import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { botAnswer } from './bot';

const persistConfig = {
  key: 'root',
  storage,
}; 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger, botAnswer));
export let persistor = persistStore(store);
