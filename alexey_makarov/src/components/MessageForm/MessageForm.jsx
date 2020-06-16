import React, {Component} from 'react';
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import styles from './index.css';
import {IconButton} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

class MessageForm extends Component {
    state = {
        text: "",
        author: ""
    };

    onChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {text, author} = this.state;
        const {addMessage} = this.props;
        addMessage({text, author})
        console.log("onSubmit event");
    };

    render(){
        const {text,author} = this.state;
        return(
        <form className={styles.container} onSubmit={this.onSubmit}>
            <TextField type="text" name="author" onChange={this.onChange} value={author} placeholder="Author" />
            <TextField name="text" value={text} onChange={this.onChange} placeholder="Message"/>
            <IconButton type="submit" variant="contained"><SendIcon/> Send</IconButton>
        </form>
        )
    }

}

MessageForm.protoTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default MessageForm;