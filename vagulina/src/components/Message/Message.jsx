import React from "react";
import PropTypes from "prop-types";
import css from "./index.css";
import cn from "classnames";

class Message extends React.Component {

  componentDidMount() {
//    console.log("message did mount");
  }

  componentDidUpdate() {
//    console.log("message did update");
  }

  render() {
//    console.log("message render");
    const { author, text } = this.props;
    return (
      <div
        className={cn(css.message, {
          [css.left]: author === "Robot",
          [css.right]: author !== "Robot",
        })}
      >
        <div className={css.author}>{author}</div> {text}
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;