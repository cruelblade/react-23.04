import React, { Component } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import Message from "../Message";
import MessageForm from "../MessageForm";
import css from "./index.css";
import PropTypes from "prop-types";
import { addNewMessage, loadMessages } from "../../actions/messageActions";
import CircularProgress from "material-ui/CircularProgress";

class MessageField extends Component {
  componentDidMount() {
    this.props.loadMessages();
    /* 
    fetch("/api/messages.json")
      .then((body) => body.json())
      .then((json) =>
        json.forEach((message) => {
          this.props.addNewMessage(
            message.id,
            message.text,
            message.author,
            message.chatId
          );
        })
      ); */
  }

  render() {
    if (this.props.isLoading) {
      return <CircularProgress />;
    }

    const { chatId, messages, chats, addNewMessage } = this.props;
    const messageElements = chats[chatId].messageList.map((messageId, id) => (
      <Message
        key={id}
        text={messages[messageId].text}
        author={messages[messageId].author}
      />
    ));
    return (
      <div className={css.container}>
        <div className={css.elements}>
          {messageElements}
          <MessageForm addNewMessage={addNewMessage} />
        </div>
      </div>
    );
  }
}

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
  chats: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  addNewMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
  chats: chatReducer.chats,
  messages: messageReducer.messages,
  isLoading: messageReducer.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addNewMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
