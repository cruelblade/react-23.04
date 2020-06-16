import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import { List, ListItem } from "material-ui/List";
import { TextField } from "material-ui";
import { ListItemText } from "@material-ui/core";
import Flag from "material-ui/svg-icons/content/flag";
import AddIcon from "material-ui/svg-icons/content/add";
import PropTypes from "prop-types";
import { addChat } from "../../actions/chatActions";

class ChatList extends React.Component {
  state = { newChatTitle: "" };

  handleAddChat = () => {
    if (this.state.newChatTitle.length > 0) {
      this.props.addChat(this.state.newChatTitle);
      this.setState({ newChatTitle: "" });
    }
  };

  onTitleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTitleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddChat();
    }
  };

  handleNavigate = (link) => {
    this.props.push(link);
  };

  render() {
    const { chats, addChat } = this.props;
    const chatElements = Object.keys(chats).map((chatId) => (
      <Link key={chatId} to={`/chat/${chatId}`}>
        <ListItem
          leftIcon={<Flag />}
          onClick={() => this.handleNavigate(`/chat/${chatId}`)}
        >
          <ListItemText>{chats[chatId].title}</ListItemText>
        </ListItem>
      </Link>
    ));
    return (
      <List>
        {chatElements}
        <ListItem
          key="New chat"
          leftIcon={<AddIcon />}
          onClick={this.handleAddChat}
          style={{ height: "60px" }}
          children={
            <TextField
              key="textField"
              fullWidth
              name="newChatTitle"
              hintText="Новый чат"
              onChange={this.onTitleChange}
              value={this.state.newChatTitle}
              onKeyUp={this.onTitleKeyUp}
            />
          }
        />
      </List>
    );
  }
}

ChatList.propTypes = {
  chats: PropTypes.object.isRequired,
  addChat: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
