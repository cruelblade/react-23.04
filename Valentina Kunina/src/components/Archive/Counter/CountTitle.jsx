import React, { PureComponent } from "react";

class CountTitle extends PureComponent {
    componentDidMount() {
        console.log('CountTitle did mounted');
    }
    render() {
        const { count } = this.props;
        return <p>{count}</p>;
    }
}

export default CountTitle;
