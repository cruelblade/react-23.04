import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FormMessage from "../../components/FormMessage";
import Messages from "../../components/Messages";
import { withStyles } from "@material-ui/core/styles";

// import Example from "../Example";
// import Counter from "../Counter";
// import styles from "./index.css";
// import style from '../../index.css'

const muiStyles = ({ theme }) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

class Chats extends PureComponent {
    state = {
        messages: [
            { text: "Привет!", author: "User" },
            { text: "Как дела?", author: "User" },
        ],
        name: "Samon",
        // visible: true,
    };

    formInput = React.createRef();

    addMessage = () => {
        const { messages } = this.state;
        this.setState({
            messages: [...messages, { text: "Нормально", author: "User" }],
            name: "Peter",
        });
    };

    timer;

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        clearTimeout(this.timer);

        if (prevState.messages.length !== messages.length) {
            if (messages[messages.length - 1].author !== "Bot") {
                this.timer = setTimeout(() => {
                    this.setState({
                        messages: [...messages, { text: "Привет, я Бот!", author: "Bot" }],
                        name: "Bot",
                    });
                    this.formInput.current.focusInput();
                }, 500);
            }
        }
    }

    reset = () => {
        this.setState(this.state);
    };

    // toggle = () => {
    //     this.setState(({ visible }) => ({ visible: !visible }));
    // };

    addNewMessage = (message) => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, message] });
    };

    render() {
        const { messages, name, visible } = this.state;
        const { lastname, classes } = this.props;

        return (
            <div className={classes.paper}>
                <Messages messages={messages} />
                <FormMessage addNewMessage={this.addNewMessage} ref={this.formInput} />
                {/* this.props.name - если прилетают внешние пропсы */}
                {/* <h2 className={style.title}>{`Hello, ${name} ${lastname}`}</h2> */}
                {/* <Example /> */}
                {/* <button onClick={this.addMessage}>Click</button> */}
                {/* <button onClick={this.reset}>Reset</button> */}
                {/* <button onClick={this.toggle}>Visible</button> */}
                {/* {visible && <Counter />} */}
            </div>
        );
    }
}

Chats.defaultProps = {
    lastname: "Ivanov",
};

Chats.propTypes = {
    // name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default withStyles(muiStyles)(Chats);
