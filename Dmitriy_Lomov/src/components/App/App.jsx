import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import RootRouter from '../../pages/RootRouter';
import store from '../../store';

const theme = createMuiTheme({});

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <CssBaseline />
                        <RootRouter />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default App;
