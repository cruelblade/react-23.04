import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import RootRouter from "./components/router";
import {Provider} from 'react-redux'
import store from "./store";

//Note: Обязательно необходимо задать темы в рамках которой будет работать Материал
const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <RootRouter/>
                <CssBaseline/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById("msg")
);