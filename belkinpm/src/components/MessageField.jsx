import React, { Component } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../css/styles.css';

class MessageField extends Component {
  state = {
    messages: [
      { text: 'Hello, my friend!', name: 'bot' },
      { text: 'How are you?', name: 'bot' },
    ],
    input: '',
  };

  inputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target);
  };

  messageSender = (message) => {
    this.setState({
      messages: [...this.state.messages, { text: message, name: 'Paul' }],
      input: '',
    });
  };

  enterKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.messageSender(message);
    }
  };

  buttonClick = (message) => {
    this.messageSender(message);
  };

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].name !== 'bot') {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              {
                text:
                  'Sorry, ' +
                  this.state.messages[this.state.messages.length - 1].name +
                  ". I'm just a robot!",
                name: 'bot',
              },
            ],
          }),
        1000
      );
      console.log(this.state);
    }
  }

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} name={message.name} text={message.text} />
    ));

    return (
      <div className='current-chat'>
        <div id='main' className='message-field'>
          {messageElements}
        </div>
        <div className='input-group'>
          <TextField
            name='input'
            fullWidth={true}
            hintText='Input your message'
            onChange={this.inputChange}
            value={this.state.input}
            onKeyUp={(event) => this.enterKeyUp(event, this.state.input)}
          />
          <FloatingActionButton
            onClick={() => this.buttonClick(this.state.input)}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default MessageField;
