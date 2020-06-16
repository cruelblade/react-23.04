import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
import styles from "./index.css";
// import Input from "@material-ui/core/Input";

const classes = () => {
    return makeStyles((theme) => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: 300,
            },
        },
        button: {
            margin: theme.spacing(1),
        },
    }));
};

class FormMessage extends PureComponent {
    state = {
        text: "",
        author: "",
    };

    inputRef = React.createRef();

    focusInput = () => {
        this.inputRef.current.focus();
    };

    componentDidMount() {
        this.focusInput();
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { addNewMessage } = this.props;
        addNewMessage(this.state);
        this.setState({ text: "" });
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            // event.stopPropagation();
            this.focusInput();
        }
    };

    handleKeyPress = (event) => {
        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            this.onSubmit(event);
        }
    };

    render() {
        const { text, author } = this.state;

        return (
            <form className={(classes.root, styles.container)} onSubmit={this.onSubmit}>
                {/* <label htmlFor="author">Author</label> */}
                <TextField
                    label="Author"
                    id="standard-textarea"
                    placeholder="Author"
                    inputProps={{ "aria-label": "description" }}
                    aria-label="author"
                    type="text"
                    name="author"
                    onChange={this.onChange}
                    value={author}
                    onKeyDown={this.handleKeyDown}
                />
                <TextField
                    id="standard-textarea"
                    label="Message"
                    placeholder="Message"
                    multiline
                    aria-label="text"
                    name="text"
                    onChange={this.onChange}
                    value={text}
                    inputRef={this.inputRef} //(input) => (this.inputRef = input)
                    onKeyDown={this.handleKeyPress}
                />
                {/* <input
                    aria-label="author"
                    type="text"
                    name="author"
                    onChange={this.onChange}
                    value={author}
                    onKeyDown={this.handleKeyDown}
                /> */}
                {/* <textarea
                    aria-label="text"
                    name="text"
                    onChange={this.onChange}
                    value={text}
                    multiple
                    ref={(input) => (this.inputRef = input)}
                    onKeyDown={this.handleKeyPress}
                /> */}
                <Button type="submit" variant="outlined" color="primary" endIcon={<SendIcon />}>
                    Add message
                </Button>
            </form>
        );
    }
}

FormMessage.propTypes = {
    addNewMessage: PropTypes.func,
};

export default FormMessage;
