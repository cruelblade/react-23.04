import React from "react";

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState(prev => ({ messages: [...prev.messages, "Нормально"] }));
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map((item, index) => {
        return (
            <li key = {index}>{item}</li>
            )
    });
    return (
      <div>
        <h2>Hello, {this.props.name}!</h2>
        <button onClick={this.addMessage}>Add list item</button>
        <ul>
            {messagesList}
        </ul>
      </div>
    );
  }
}

export default HelloMessage;