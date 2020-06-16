import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage";


class HelloMessage extends Component {
  state = {
    messages: [],
    isVisible: true,
    };

  toogle = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  addMessage = () => {
    this.setState(({ messages }) => ({ messages: [...messages, { text: "hi", author: "ND" }],
   }));
  }

  componentDidUpdate() {
    const {messages} =this.state;
    if (messages[messages.length - 1].author !== "BOT") {
      setTimeout(() => {
      this.setState (({ messages }) => ({ messages: [...messages, { text: "Привет, я БОТ", author: "BOT" }] }));
   }, 500);
  } 
}

addNewMessage = (e) => {
  e.preventDefault;
  console.log (e);
}

  render() {
    const { name, lastname } = this.props;
    const { messages, isVisible } = this.state; 
    return (
      <div>
        <h2>Привет, {name} {lastname} </h2>
        {messages.map(({text, author}, index) => (
          <p key={index}>{`${author}:${text}`}</p>
        ))}
        <FormMessage  addNewMessage={this.addNewMessage}/>
        <button onClick={this.addMessage}>Click</button>
        <button onClick={this.toogle}>Visible</button>
        {isVisible && <p>ЙО</p>}
       </div>
    );
  }
}

HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

export default HelloMessage;