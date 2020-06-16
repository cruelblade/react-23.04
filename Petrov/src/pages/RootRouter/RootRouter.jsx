import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from '../Home';
import About from '../About';
import Profile from '../Profile';
import MessageField from '../../components/MessageField';
import Layout from '../../components/Layout/Layout';
import EmptyPage from '../EmptyPage';
import { fetchChatsData } from '../../actions/chatsActions';
import { fetchProfile } from '../../actions/profileActions';

class RootRouter extends Component {
  componentDidMount() {
    const { fetchChatsData } = this.props;
    const { fetchProfile } = this.props;
    fetchChatsData();
    fetchProfile(); 
    
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>       
        <Route path="/chats/:chatId" component={MessageField} />
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
  open: store.chats.isFetching,
});

const mapDispatchToProps = {
  fetchChatsData,
  fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);


