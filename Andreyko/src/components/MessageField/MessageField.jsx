import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Message from '../Message';
import './style.css';

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default class MessageField extends Component {
  constructor(props) {
    super(props);

    this.botTimer = false;

    this.state = {
      messages: {
        1: {text: 'проба', author: 'Игорь'},
        2: {text: 'океан программирования', author: 'Ламповый Ром4нтик'},
        3: {text: 'хочу купить', author: 'Тайный покупатель'},
        4: {text: 'пера', author: 'Игорь'},
      },
      chats: {
        1: {title: 'Чат 1', messageList: [1,4], botName: 'Игорь', answers: ['как дела?']},
        2: {title: 'Чат 2', messageList: [2], botName: 'Ламповый Ром4нтик', answers: ['я не в духе, отстань']},
        3: {title: 'Чат 3', messageList: [3], botName: 'Тайный покупатель', answers: ['в Магните плохие работники']},
      },
      inputValue: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    if (Object.keys(prevState.messages).length < Object.keys(messages).length
        && Object.values(messages)[Object.values(messages).length - 1].author === 'me') {
      if (!this.botTimer) {
        setTimeout(() => {
          this.addMessage(choose(chats[chatId].answers), chats[chatId].botName);
          this.botTimer = false;
        }, 2000);
        this.botTimer = true;
      }
    }
  };

  addMessage = (messageContent, sender) => {
    const { messages, chats, inputValue } = this.state;
    const { chatId } = this.props;

    if (inputValue || sender === chats[chatId].botName) {
      const messageId = Object.keys(messages).length + 1;
      this.setState(({ messages, chats }) => (
        {
          messages: {...messages, [messageId]: { text: messageContent, author: sender }},
          chats: {...chats, [chatId]: { ...chats[chatId], messageList: [...chats[chatId].messageList, messageId] }},
          inputValue: ''
        }
      ));
    }
    if (sender === 'me') {
      this.setState({ inputValue: '' });
    }
  };

  onMessageChange = (event) => {
    const target = event.target.value;
    this.setState(({ messages }) => (
      { messages: messages, inputValue: target }
    ));
  }

  keyUpHandler(event) {
    if (event.key === 'Enter') {
      this.addMessage(this.state.inputValue, 'me');
    }
  }

  sendPresedHandler() {
    this.addMessage(this.state.inputValue, 'me');
  }

  render() {
    const { messages, chats, inputValue } = this.state;
    const { chatId } = this.props;
    const botName = chats[chatId].botName;

    const messageElements = chats[chatId].messageList.map((messageId, i) => {
      const { text, author } = messages[messageId];
      return (
        <Message key={i} author={author} text={text} botName={botName} />
      )
    });

    return (
      <div className="message-filed">
        <div className="chat-field">
          {messageElements}
        </div>
        <div className="btn-text">
          <TextField label="Пишем..." variant="outlined" onKeyUp={this.keyUpHandler.bind(this)} onChange={this.onMessageChange} value={inputValue} />
          <Button variant="contained" endIcon={<Icon>send</Icon>} onClick={this.sendPresedHandler.bind(this)} className="btn-send">Написать</Button>
        </div>
      </div>
    )
  };
}

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
};