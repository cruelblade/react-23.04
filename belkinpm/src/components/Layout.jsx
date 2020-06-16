import React, { Component } from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';

class Layout extends Component {
  state = {};

  render() {
    return (
      <div className='layout'>
        <Header />
        <div className="content">
          <ChatList />
          <MessageField />
        </div>
      </div>
    );
  }
}

export default Layout;
