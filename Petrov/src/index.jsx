import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootRouter from './pages/RootRouter';
import InstallPopup from './components/InstallPopup';
import * as serviceWorker from './serviceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <RootRouter />
  <InstallPopup />
  </BrowserRouter>
  </Provider>,
  document.getElementById("hello-example")
);
serviceWorker.register();
