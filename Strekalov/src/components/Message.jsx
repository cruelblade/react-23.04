import React from "react";

class Message extends React.PureComponent {

  render() {
  return (
    <ul>
      {this.props.words.map(({ id, message, author }, index) =>
        <li key={id}>{`${author}: ${message}`}</li>
      )}
    </ul>
  );

  }
}

export default Message;