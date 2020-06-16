import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import classNames from 'classnames';


export const messageType =  {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class MessageItem extends Component {
  static propTypes = messageType;

  render() {
    const { author, text } = this.props;
    const classes = classNames(styles.message, {
        [styles.left]: author !== 'Bot',
        [styles.right]: author === 'Bot',
      });
  

    return (
      <li className={classes}>
        <div>{text}</div>
        <div className={styles.msender}>{author}</div>
      </li>
    );
  }
}

export default MessageItem;