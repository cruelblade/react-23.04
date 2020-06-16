import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

const useStyles = makeStyles((theme) => {
    // console.log(theme);
    return {
        item: {},
        root: {
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            minHeight: 48,
            padding: 20,
            margin: 20,
            width: 250,
        },
        left: {
            alignSelf: "flex-start",
        },
        right: {
            alignSelf: "flex-end",
        },
    };
});

const MessageItem = ({ author, text }) => {
    const classes = useStyles();
    return (
        <div
            className={cx(classes.root, {
                [classes.right]: author === "Bot",
                [classes.left]: author !== "Bot",
            })}
        >
            {`${author}: ${text}`}
        </div>
    );
};

MessageItem.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default MessageItem;
