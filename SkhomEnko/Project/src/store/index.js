import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from './loadStore';

const logger = createLogger({ collapsed: true });

const storeInit = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default storeInit();
