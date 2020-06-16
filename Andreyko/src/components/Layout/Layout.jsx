import React, { Component } from 'react';
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import Chatlist from '../ChatList';
import Header from '../Header';
import MessageField from '../MessageField';
import './style.css';

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Header chatId={this.props.chatId} />
        <div className="chat-container">
          <Chatlist pickCallback={this.pickCallback} chatName={this.bots} />
          <MessageField myNickname='Стиф' chatId={this.props.chatId} />
        </div>
      </Container>
    )
  }
}

Layout.propTypes = {
  chatId: PropTypes.number,
};

Layout.defaultProps = {
  chatId: 1,
};