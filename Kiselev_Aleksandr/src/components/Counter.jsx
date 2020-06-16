import React, { PureComponent } from "react";
import CountTitle from "./CountTitle";
import Example from "./Example";

let interval = null;

class Counter extends PureComponent {
  state = { count: 0 };

  componentDidMount() {
    console.log("component Counter did mount");
    interval = setInterval(() => {
      console.log("I,m from interval");
    }, 1000);
  }

  componentDidUpdate(prev, prevState) {
    console.log("Did Update", prevState);
  }

  componentWillUnmount() {
    console.log("Component Will UNMOUNT");
    clearInterval(interval);
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <Example />
        <CountTitle count={count} />
        <span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </span>
      </div>
    );
  }
}

export default Counter;
