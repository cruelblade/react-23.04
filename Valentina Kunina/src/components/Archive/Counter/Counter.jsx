import React, { PureComponent } from "react";
import CountTitle from "./CountTitle";
import Example from "../Example";
import style from './index.css';

let intervall = null;

class Counter extends PureComponent {
    state = {
        count: 0,
    };

    componentDidMount() {
        console.log('Counter component did mounted');
        // intervall = setInterval(() => {
        //     console.log('I\'m from interval');
        // }, 1000)
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //     prevProps === this.props;
    // }
    // == PureComponent

    componentDidUpdate(prevProps, prevState) {
        console.log('Did update', prevState);
    }

    componentWillUnmount() {
        console.log('Counter component will unmount');
        clearInterval(intervall);
    }

    changeCount = (event) => {
        const isIncrement = event.target.dataset.count === 'inc';
        this.setState(({ count }) => ({ count: isIncrement ? count + 1 : count - 1 }));
    };

    render() {
        // console.log('render');
        const { count } = this.state;
        return (
            <div className={style.counter}>
                <Example />
                <CountTitle count={count}/>
                <span>
                    <button data-count="dec" onClick={this.changeCount}>
                        -
                    </button>
                    <button data-count="inc" onClick={this.changeCount}>
                        +
                    </button>
                </span>
            </div>
        );
    }
}

export default Counter;
