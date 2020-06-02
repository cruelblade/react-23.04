import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from './Counter';
import FormMessage from "./FormMessage";


class HelloMessage extends Component {
  state = {
    messages: [],
    isVisible: true,
  };

  toggle = (e) => {
    this.setState(({ isVisible }) => ({ 
      isVisible: !isVisible
    }));
  };

  addMessage = () => {
    this.setState(({ messages }) => ({ 
      messages: [...messages,  {text: "привет", author: "Pog"}],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== "Бот") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages,  {text: "привет, я Бот", author: "Бот"}],
        }));
      }, 1000);
    }
  }

  addNewMessage = (data) => {
    this.setState(({ messages }) => ({ 
      messages: [...messages, data ] 
    }));
  }

  render() {
    const {name, lastname} = this.props;
    const { messages, isVisible } = this.state;

    return (
      <div>
        <h2 className="title">{`Привет, ${name} ${lastname}`}</h2>
        <ul>
          {messages.map(({text, author}, index) => (
            <li key={index}>
              <p>{`${author}: ${text}`}</p>
            </li>
          ))}
        </ul>
        <FormMessage addNewMessage={this.addNewMessage}/>
        <button onClick={this.addMessage}>Click</button>
        <button onClick={this.toggle}>Visible</button>
        {isVisible && <Counter styles={{ height:100 }} />}
      </div>
    );
  }
}

HelloMessage.defaultProps = {
  lastname: "дефолтный",
};

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};


export default HelloMessage;