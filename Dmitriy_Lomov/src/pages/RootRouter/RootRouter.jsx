import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchChatsData } from '../../store/chats/actions';
import { fetchMessagesData } from '../../store/messages/actions';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Home from '../Home';
import Chats from '../Chats';
import Layout from '../../components/Layout';
import EmptyPage from '../EmptyPage';

class RootRouter extends Component {
  componentDidMount() {
    const { fetchChatsData, fetchMessagesData } = this.props;
    
    fetchChatsData();
    fetchMessagesData();
  }

  render() {
    const { open } = this.props;

    return (
      <Layout>
        <Backdrop open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chats/:chatId" component={Chats} />
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = store => ({
  open: store.chats.isFetching,
});

const mapDispatchToProps = {
  fetchChatsData,
  fetchMessagesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
