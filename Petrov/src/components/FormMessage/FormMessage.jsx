import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
});

class FormMessage extends Component {
  state = {
    text: "",
    author: "",
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
      e.preventDefault();
      const { addNewMessage } = this.props;
      addNewMessage(this.state);
      this.setState({ text: '', author: '' });
  };
  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
        this.handleMessageSend();
    }
};
  render() {
    const { text, author } = this.state;
    const { classes } = this.props;

    return (
      <form className={classes.root}  onSubmit={this.onSubmit}>
        <TextField label="author" name="author" onChange={this.onChange} value={author}/>
        <TextField label="text" name="text" onKeyDown={this.handleEnterDown} onChange={this.onChange} value={text} ></TextField>
        <Button variant="contained" color="primary"  type="submit"><SendIcon /></Button>
      </form>
    );
  }
}
FormMessage.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
};
//export default FormMessage;
export default withStyles(useStyles)(FormMessage)