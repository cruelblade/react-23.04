import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import './style.css';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <Link to="/chat/1/">
          <ListItem primaryText="Игорь" />
        </Link>
        <Link to="/chat/2/">
          <ListItem primaryText="Ламповый Ром4нтик" />
        </Link>
        <Link to="/chat/3/">
          <ListItem primaryText="Тайный покупатель" />
        </Link>
      </List>
    )
  }
}