import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MessageField from '../MessageField'
import Messages from '../Messages'
import styles from './HelloMessage.css'

class HelloMessage extends React.Component {
    state = {
            messages: []
        };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "Bot") {
                setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { text: "привет, я Бот", author: "Bot" }],
                }));
                }, 1000);
        }
    }
    
    addNewMessage = ({text, author}) => {
        console.log(`${author}: ${text}`);
        this.setState(({ messages }) => ({
            messages: [...messages, { text: text, author: author }],
        }));
    };

    render() {
        const messages = this.state.messages;
        const {name, lastname} = this.props;
        return (
        <div className={styles.container}>
            <CssBaseline />
            <h2>Привет, {name} {lastname}</h2>
            <MessageField addNewMessage={this.addNewMessage} />
            <Messages messages={messages} />
        </div>
        );
    }
}

HelloMessage.defaultProps = {
    lastname: 'Ivanov'
}

HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
}

export default HelloMessage;