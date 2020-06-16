import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../../components/FormMessage';
import Messages from '../../components/Messages/Messages';
import { getChatMessages } from '../../selectors/chatsSelectors';
import { addMessage } from '../../actions/chatsActions';

const muiStyles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Chats extends Component {

  addNewMessage = data => {
    const {
      addMessage,
      match: { params },
    } = this.props;
    const { chatId } = params;
    addMessage({ ...data, chatId });
  };

  render() {
    const { messages } = this.props;
    return (
      <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
      </Box>
    );
  }
}

const mapStateToProps = (store, ownProps) => ({
  messages: getChatMessages(store, ownProps),
});

const mapDispatchToProps = {
  addMessage,
};

Chats.defaultProps = {
  messages: [],
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(muiStyles),
)(Chats);