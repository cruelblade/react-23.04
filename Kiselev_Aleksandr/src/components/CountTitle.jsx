import React, { Component } from "react";

class CountTitle extends Component {
  componentDidMount() {
    console.log("Title Did Mount");
  }

  render() {
    const { count } = this.props;
    return <p>{count}</p>;
  }
}

export default CountTitle;
