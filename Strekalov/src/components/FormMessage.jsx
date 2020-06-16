import React, { Component } from "react";

class FormMessage extends Component {
  state = {
    text: "",
    author: "",
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
      const { addNewMessage } = this.props;
      addNewMessage(this.state.text, this.state.author);
      e.preventDefault(); 
      this.state.text = '';
  };

  render() {
    const { text, author } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="author"
          onChange={this.onChange}
          value={author}
        />
        <textarea name="text" onChange={this.onChange} value={text} />
        <button type="submit">Add message</button>
      </form>
    );
  }
}

export default FormMessage; 