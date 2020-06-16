import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/*import Header from '../Header';*/
import Message from '../Message';
import ChatList from '../ChatList';

const muiStyles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Layout extends Component {
  state = {
    messages: []
  };

  addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: "Clicked!", author: "somebody" }],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: "Hi! This is answering machine.", author: "Bot" }],
        }));
      }, 500);
    }
  }

  addNewMessage = msg => {
    this.setState(({ messages }) => ({ messages: [...messages, msg] }));
  };

  render() {
    const { classes } = this.props;
    const { messages } = this.state;

    return (
      <div className={classes.paper}>
        <ChatList messages={messages} />        
        <Message addNewMessage={this.addNewMessage} />
        <br/>
        <button onClick={this.addMessage}>Click me!</button>
      </div>
    );
  }
}

Layout.defaultProps = {
  classes: {},
};

Layout.propTypes = {
  classes: PropTypes.shape(PropTypes.any),
};

export default withStyles(muiStyles)(Layout);