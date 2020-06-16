import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import ChatList from '../ChatList';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName } = this.props;
    return (
      <Container maxWidth="lg">
        <Header />
        <h1>Мой профиль</h1>
        <h2>{`Меня зовут ${userName}`}</h2>
        <ChatList />
      </Container>
    )
  }
}