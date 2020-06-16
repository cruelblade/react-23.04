import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../../components/FormMessage';
import { getChatMessages, getCurrentUser } from '../../selectors/chatsSelectors';
import { addMessage } from '../../actions/chatsActions';
import MessageList from '../../components/MessageList';

const muiStyles = theme => {
  return {
    paper: {
      height: 700,
      marginTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Chats extends Component {
  componentDidMount() {}

  addNewMessage = data => {
    const {
      addMessage,
      match: { params },
    } = this.props;
    const { chatId } = params;
    addMessage({ ...data, chatId });
  };

  render() {
    const { messages, user } = this.props;
    return (
      <Box flexGrow={1}>
        <MessageList messages={messages} user={user} />
        <FormMessage addNewMessage={this.addNewMessage} user={user} />
      </Box>
    );
  }
}

const mapStateToProps = (store, ownProps) => ({
  messages: getChatMessages(store, ownProps),
  user: getCurrentUser(store),
});

const mapDispatchToProps = {
  addMessage,
};

Chats.defaultProps = {
  messages: [],
};

Chats.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      text: PropTypes.string,
      Timestamp: PropTypes.number,
    }),
  ),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(muiStyles),
)(Chats);
