import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Profile from '../Profile';
import Home from '../Home';
import About from '../About';
import Chats from '../Chats';
import Layout from '../../components/Layout/Layout';
import EmptyPage from '../EmptyPage';
import { setChats } from '../../actions/chatsActions';
import mockPageLinks from './mockPageLinks';

class RootRouter extends Component {
  componentDidMount() {
    const { setChats } = this.props;
    setTimeout(() => {
      setChats(mockPageLinks);
    }, 1000);
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/chats/:chatId" component={Chats} />
          <Route path="/profile" component={Profile} />
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = store => ({
  chats: store.chats,
});

const mapDispatchToProps = {
  setChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
