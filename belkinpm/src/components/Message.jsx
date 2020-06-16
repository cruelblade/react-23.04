import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div
        className='message'
        style={{
          alignSelf: this.props.name === 'bot' ? 'flex-start' : 'flex-end',
          backgroundColor:
            this.props.name === 'bot' ? 'lightblue' : 'lightsteelblue',
          borderBottomLeftRadius: this.props.name === 'bot' ? '0' : '0.75rem',
          borderBottomRightRadius: this.props.name === 'bot' ? '0.75rem' : '0',
        }}
      >
        <div>{this.props.text}</div>
        <div className='message-sender'>{this.props.name}</div>
      </div>
    );
  }
}

export default Message;
