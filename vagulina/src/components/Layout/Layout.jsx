import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import Header from "../Header";
import css from "./index.css";

class Layout extends React.Component {
  addNewMessage = (message) => {
    const { chatId, messages } = this.props;
    const newMessageId = Object.keys(messages).length + 1;
    /* this.props.addNewMessage(
      Object.keys(messages).length + 1,
      message.text,
      message.author,
      chatId
    ); */
  };

  render() {
    return (
      <div className={css.layout}>
        <Header chatId={this.props.chatId} />
        <div className={css.canvas}>
          <div className="layout-left-side">
            <ChatList />
          </div>
          <div className="layout-right-side">
            <MessageField chatId={this.props.chatId} />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  chatId: PropTypes.number,
};

Layout.defaultProps = {
  chatId: 1,
};

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
