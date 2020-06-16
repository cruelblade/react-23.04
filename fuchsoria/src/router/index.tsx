import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { initStore } from '../store';
import { fetchProfile } from '../store/actions/profileActions';
import { fetchChats } from '../store/actions/chatsActions';
import LayoutContainer from '../components/Layout';
import Chats from '../pages/Chats';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const { store, persistor, history } = initStore();

export default class Router extends Component {
  componentDidMount() {
    store.dispatch(fetchChats());
    store.dispatch(fetchProfile());
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <LayoutContainer>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/home" exact>
                  <Home />
                </Route>
                <Route path="/chats" exact>
                  <Chats />
                </Route>
                <Route path="/chats/:chatId" component={Chats} exact />
                <Route path="/profile" exact>
                  <Profile />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </LayoutContainer>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
