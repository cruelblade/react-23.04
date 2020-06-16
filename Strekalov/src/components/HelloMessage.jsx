import React from "react";
import Example from './Example';
import PropTypes from "prop-types";
import Message from "./Message";
import FormMessage from "./FormMessage";

class HelloMessage extends React.Component {
    state = {
      messages: [],
      isVisible: true,
    };

    toggle = () => {
      this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
    };

    addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: "привет", author: "Str" }],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "Бот") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: "привет, я Бот", author: "Бот" }],
        }));
      }, 1000);
    }
  }

  addNewMessage = (msg, author) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: msg, author: author }],
    }));
  };


    render() {
      const { name, lastname } = this.props;
      const { messages, isVisible } = this.state;
      return (
        <div>
          <h2>{`Привет, ${name} ${lastname}`}</h2>
          <ul>
          {messages.map(({ text, author }, index) => (
            <li key={index}>
              <p>{`${author}: ${text}`}</p>
            </li>
          ))}
        </ul>
        <FormMessage addNewMessage={this.addNewMessage} />
        <button onClick={ () => this.addMessage('me', 'Нормально')}> Click</button>
        <Message words={messages} />
        </div>
      );
    }
  }
  
  HelloMessage.defaultProps = {
    lastname: "Str",
    name: "Str",
  };
  
  HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
  };

export default HelloMessage;