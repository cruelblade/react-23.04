import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';


class ChatList extends Component {
  render() {
    return (
      <List>
        <Link to="/chat/1/" key="chat_1">
          <ListItem primaryText="Room #1" />
        </Link>
        <Link to="/chat/2/" key="chat_2">
          <ListItem primaryText="Room #2" />
        </Link>
      </List>
    )
  }
}

export default ChatList;