import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Router from "./components/Router";
import initStore, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
