import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import ChatList from '../ChatList';

class Profile extends Component {

  render() {
    const { user } = this.props;
    return (
      <Container maxWidth="lg">
        <Header />
        <h1>Profile</h1>
        <h2>{`Name: ${user}`}</h2>
        <ChatList />
      </Container>
    )
  }
}

export default Profile;