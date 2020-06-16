import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, "add"] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <button>Click</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Саша" />,
  document.getElementById("hello-example")
);
