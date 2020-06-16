import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./Message";

class MessageField extends Component {
  state = {
    messages: []
  };

  addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: "Clicked!", author: "somebody" }],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: "Hi! This is answering machine.", author: "Bot" }],
        }));
      }, 500);
    }
  }

  addNewMessage = (msg, author) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: msg, author: author }],
    }));
  };

  render() {
    const { lastname, name } = this.props;
    const { messages } = this.state;

    return (
      <div>
        <h2>{`Hello, ${name} ${lastname}!`}</h2>
        {messages.map(({ text, author }, index) => (
          <p key={index}>{`${author}: ${text}`}</p>
        ))}
        <Message addNewMessage={this.addNewMessage} />
        <br/>
        <button onClick={this.addMessage}>Click me!</button>
      </div>
    );
  }
}

MessageField.defaultProps = {
  lastname: "K.",
  name: "Ivan",
};

MessageField.propTypes = {
  lastname: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default MessageField;