import { fetchMiddleware } from './middlewares/fetchMiddleware';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
import chatsReducer from './reducers/chatsReducer';
import profileReducer from './reducers/profileReducer';
import chatlistReducer from './reducers/chatlistReducer';
import { botAnswer } from './middlewares/botMiddleware';
import { autoRedirect } from './middlewares/chatMiddleware';
import { createBrowserHistory, History } from 'history';

const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = (history: History) =>
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    chatlist: chatlistReducer,
    router: connectRouter(history),
  });

const persistConfig = {
  key: 'messengerweb',
  whitelist: ['chats', 'profile'],
  storage,
};

export function initStore(preloadedState = undefined) {
  const persistedReducer = persistReducer(persistConfig, reducer(history));

  const middlewares = [routerMiddleware(history), apiMiddleware, fetchMiddleware, thunk, botAnswer, autoRedirect];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(persistedReducer, preloadedState, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor, history };
}
