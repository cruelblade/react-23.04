import React, { useState, memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Example from "../../components/Archive/Example/Example";
// import Counter from "../Counter";
import FormMessage from "../../components/FormMessage";
import { makeStyles } from '@material-ui/core/styles';
import style from '../../index.css';

const initialState = {
    messages: [
        { text: "Привет!", author: "User" },
        { text: "Как дела?", author: "User" },
    ],
    name: "Samon",
    visible: true,
};

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

const HelloMessage = ({ lastname }) => {
    // ({ lastname }) - деструктуризация входящего пропса, можно прописать props,
    // но тогда обращаться как к объекту - props.lastname
    //state = initialState; вместо классового state используется:

    const [messages, setMessages] = useState(initialState.messages);
    const [name, setName] = useState(initialState.name);
    const [isVisible, setVisibility] = useState(true);

    const formRef = useRef();

    const toggle = () => {
        setVisibility((prev) => !prev);
    };

    const addMessage = () => {
        setMessages([...messages, { text: "Нормально", author: "User" }]);
    };

    const addNewMessage = (message) => {
        setMessages([...messages, message]);
    };

    const changeName = () => {
        setName("Peter");
    };

    const reset = () => {
        setMessages(initialState.messages);
        setName(initialState.name);
    };

    const handleClick = () => {
        addMessage();
        changeName();
    };

    useEffect(() => {
        if (messages[messages.length - 1].author !== "Bot") {
            setTimeout(() => {
                setMessages([...messages, { text: "Привет, я Бот!", author: "Bot" }]);
                setName("Bot");
                formRef.current.focusInput();
            }, 500);
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <h2 className={style.title}>{`Hello, ${name} ${lastname}!`}</h2>
            <Example />
            {messages.map(({ text, author }, idx) => (
                <div key={idx}>{`${author}: ${text}`}</div>
            ))}
            <FormMessage addNewMessage={addNewMessage} ref={formRef}/>
            <button onClick={handleClick}>Click</button>
            <button onClick={reset}>Reset</button>
            <button onClick={toggle}>Visible</button>
            {/* {isVisible && <Counter />} */}
        </div>
    );
};

HelloMessage.defaultProps = {
    lastname: "Ivanov",
};

HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default memo(HelloMessage);
