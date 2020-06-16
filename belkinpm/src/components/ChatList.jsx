import React, { Component } from 'react';

class ChatList extends Component {
  render() {
    return (
        <div className="chat-list">
            <ul>
                <li>John Smith</li>
                <li>Donny Trump</li>
                <li className="active">Robot Rock</li>
                <li>Marry Poppins</li>
                <li>Santa</li>
            </ul>
        </div>
    )
  }
}

export default ChatList;
