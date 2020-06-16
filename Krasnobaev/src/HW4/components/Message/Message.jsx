import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import styles from './index.css';

class Message extends Component {
    state = {
        chats: {
            1: { title: "ChatRoom 1", messageList: [1] },
            2: { title: "ChatRoom 2", messageList: [1] },
        },
        messages: {
            1: { text: "Obey!", author: "Bot" },
        },
        newMsg: { text: "", author: "Ivan K."}
    };

    componentDidUpdate() {
        if (this.state.messages[messages.length - 1].author !== "Bot") {
            setTimeout(
                () => this.addNewMessage(this.state.messages[1]),
                500
            );
        }
    };
    
    addNewMessage = msg => {
        const { cid } = this.props;
        const newMsgId = Object.keys(this.state.messages).length + 1;

        this.setState(({ messages, chats }) => ({
        messages: {
            ...messages,
            [newMsgId]: { text: msg.text, author: msg.author },
        },
        chats: {
            ...chats,
            [cid]: {
            ...chats[cid],
            messageList: [...chats[cid].messageList, messageId],
            },
        },
        }));
    };

    onChange = (e) => {
        const { value, name } = e.target;
        
        this.setState( ({newMsg}) => ({
            newMsg: { text: value, author: name}
        }));
    };

    semdMsg = () => {
        const { text, author } = this.state.newMsg;
        
        this.addNewMessage({ text, author });
        this.state.newMsg.text = '';
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
        const { messages } = this.state;//передать все сообщения по id чата


        return (
            <div>
                <ChatList messages={messages} />
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
            </div>
        );
    }
}

export default Message;