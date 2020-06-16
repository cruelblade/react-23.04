import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageItem from "../MessageItem";
import styles from "./index.css";
// import cx from "classnames";
import { Box } from "@material-ui/core";

const listStyles = {
    border: "1px solid #333",
    borderRadius: 3,
    minHeight: 300,
};

class Messages extends Component {
    render() {
        const { messages } = this.props;

        return (
            <Box>
                <Box border={1} {...defaultProps}>
                    {/* <ul className={styles.list} style={listStyles}> */}
                    {messages.map((
                        { author, text }, //{ author, text } = item
                        idx
                    ) => (
                        <MessageItem key={idx} author={author} text={text} /> // author={author} text={text} = {...item}
                    ))}
                    {/* </ul> */}
                </Box>
            </Box>
        );
    }
}

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            text: PropTypes.string,
        })
    ),
};

const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    style: { width: "40rem", minHeight: "25rem" },
    borderColor: "text.primary",
    display: 'flex',
    flexDirection: 'column',
};

export default Messages;
