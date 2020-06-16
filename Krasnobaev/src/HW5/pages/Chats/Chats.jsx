import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../../components/FormMessage';
import Messages from '../../components/Messages/Messages';

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
    state = {
        chats: {
            1: {
                title: 'chats_1',
                messages: [
                    {
                        text: 'Hi, i`m bot from first chat',
                        author: 'Bot',
                    },
                ],
            },
            2: {
                title: 'chats_2',
                messages: [
                    {
                        text: 'Hi, i`m bot from second chat',
                        author: 'Bot',
                    },
                ],
            },
        },
        messages: [
            { text: 'привет, я Бот', author: 'Bot' },
            { text: 'привет, я Человек', author: 'User' },
        ],
    };

    timer;

    componentDidUpdate(prevProps, prevState) {
        const {
            match: { params },
        } = this.props;
        const { chatId } = params;
        const { chats } = this.state;
        const messages = chats[chatId].messages;
        clearTimeout(this.timer);
        if (prevState.chats[chatId].messages.length !== messages.length) {
            if (messages[messages.length - 1].author !== 'Bot') {
                this.timer = setTimeout(() => {
                    this.setState(({ chats }) => ({
                        chats: {
                            ...chats,
                            [chatId]: {
                                ...chats[chatId],
                                messages: [
                                    ...chats[chatId].messages,
                                    { text: 'Hello there', author: 'Bot' },
                                ],
                            },
                        },
                    }));
                }, 500);
            }
        }
    }

    get messages() {
        const { chats } = this.state;
        const {
            match: { params },
        } = this.props;
        const { chatId } = params;

        return chats[chatId].messages;
    }

    addNewMessage = data => {
        const {
            match: { params },
        } = this.props;
        const { chatId } = params;
        this.setState(({ chats }) => ({
            chats: {
                ...chats,
                [chatId]: { ...chats[chatId], messages: [...chats[chatId].messages, data] },
            },
        }));
    };

    render() {
        return (
            <Box p={3} mt={2} flexGrow={1}>
                <Messages messages={this.messages} />
                <FormMessage addNewMessage={this.addNewMessage} />
            </Box>
        );
    }
}

export default withStyles(muiStyles)(Chats);