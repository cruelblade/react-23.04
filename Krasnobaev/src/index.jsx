import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import RootRouter from './HW7/pages/RootRouter';
import store from './HW7/store';

const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('messenger'),
);