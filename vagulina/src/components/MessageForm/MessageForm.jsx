import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import css from "./index.css";
import { TextField, IconButton } from "@material-ui/core";
import SendIcon from "material-ui/svg-icons/content/send";

class MessageForm extends PureComponent {
  state = { text: "", author: "Me" };

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addNewMessage } = this.props;
    const { text, author } = this.state;
    addNewMessage({ text: text, author: author });
    this.setState({ text: "" });
  };

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.onSubmit(e);
    }
  };

  render() {
    const { text, author } = this.state;
    return (
      <form onSubmit={this.onSubmit} className={css.form}>
        <div className={css.text}>
          <TextField
            type="text"
            fullWidth={true}
            name="text"
            value={text}
            label="Message"
            multiline
            onChange={this.onChangeText}
            onKeyUp={this.onKeyUp}
            autoFocus = {true}
          />
          <IconButton size="small" color="primary" onClick={this.onSubmit}>
            <SendIcon />
          </IconButton>
        </div>
      </form>
    );
  }
}

MessageForm.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
};

export default MessageForm;
