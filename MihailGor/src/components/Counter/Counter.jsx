import React, { PureComponent } from "react";
import CountTitle from "./CountTitle";
import Example from "./Example";
import style from "./index.css";

let interval = null;

class Counter extends PureComponent {
  state = { count: 0 };

  componentDidMount() {
    console.log("component counter did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update', prevState);
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  changeCount = (e) => {
    const isDecrement = e.target.dataset.count === "dec";

    this.setState(({count}) => ({
      count: isDecrement ? count + 1 : count - 1,
    }));
  };

  render() {
    const {count} = this.state;
    return (
      <div className={style.counter}>
        <Example />
        <CountTitle count ={count} />
        <span>
          <button data-count= "inc" onClick={this.changeCount}>-</button>
          <button data-count= "dec" onClick={this.changeCount}>+</button>
        </span>
      </div>
    )
  }
}

export default Counter;