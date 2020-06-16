import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import styles from './index.css';

class Message extends Component {
    state = {
        text: "",
        author: "Ivan K.",
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    semdMsg = () => {
        const { addNewMessage } = this.props;
        const { text, author } = this.state;

        
        addNewMessage({ text, author });
        this.state.text = '';
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.semdMsg();
    };

    onKeyDown = (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            this.sendMsg();
        }
    }

    render() {
        const { text, author } = this.state;

        return (
        <form className={styles.container} noValidate onSubmit={this.onSubmit}>
            <Input 
                placeholder="Author:" 
                inputProps={{ 'aria-label': 'description' }} 
                name="author"
                onChange={this.onChange}
                value={author}
                className={styles.input}
            />
            <Input 
                placeholder="Your message:" 
                inputProps={{ 'aria-label': 'description' }} 
                name="text"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={text}
                className={styles.input}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
            >
                Add message 
            </Button>
        </form>
        );
    }
}

export default Message;