import React, { Component } from "react";

class Message extends Component {
    state = {
        text: "",
        author: "Ivan K.",
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    onSubmit = (e) => {
        const { addNewMessage } = this.props;
        e.preventDefault();
        addNewMessage(this.state.text, this.state.author);
        this.state.text = '';
    };

    render() {
        const { text, author } = this.state;

        return (
        <form onSubmit={this.onSubmit}>
            <label htmlFor="author">Author: </label>
            <input id="author" type="text" name="author" onChange={this.onChange} value={author} />
            <br/><br/>
            <label htmlFor="text">Your message: </label>
            <textarea id="text" name="text" onChange={this.onChange} value={text} />
            <button type="submit">Add message</button>
        </form>
        );
    }
}

export default Message;