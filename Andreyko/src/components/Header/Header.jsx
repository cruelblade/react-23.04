import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import './style.css'

export default class Header extends Component {
  render() {
    const { chatId } = this.props;
    return (
      <div className="header-container">
        <h1 className="chat-heading">{`Чат ${chatId}`}</h1>
        <Link to="/profile/">
          <h2>Мой профиль</h2>
        </Link>
      </div>
    )
  }
}

Header.propTypes = {
  chatId: PropTypes.number,
};

Header.defaultProps = {
  chatId: 1,
};