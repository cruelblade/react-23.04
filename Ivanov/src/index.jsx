import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages/RootRouter';
import {store, persistor} from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);