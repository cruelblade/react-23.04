import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMessage from "../FormMessage";
import Messages from "../Messages/Messages";
import styles from "./index.css";

class HelloMessage extends Component {
    state = {
        messages: [],
    };

    addMessage = () => {
        this.setState(({ messages }) => ({
            messages: [...messages, { text: "Привет!", author: "user" }]
        }));
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "bot") {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { text: "Тра-та-та!", author: "bot" }]
                }));
            }, 1000);
        }
    }


    addNewMessage = (data) => {
        this.setState(({ messages }) => ({ messages: [...messages, data] }));
    };

    render() {
        const { name, lastname } = this.props;
        const { messages } = this.state;
        return (
            <div>
                <h2 className="title">{`Привет, ${name} ${lastname}`}</h2>
                <Messages messages={messages} />
                <FormMessage addNewMessage={this.addNewMessage} />
                <button className={styles.btn_hello} onClick={this.addMessage}>Say hello</button>
            </div>
        );
    }
}

HelloMessage.defaultProps = {
    lastname: "Str",
};

HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
};

export default HelloMessage