import React, {Component} from 'react';

class CountTitle extends Component{
    render() {
        const {count}=this.props;
        return <p>Title:{count}</p>
    }
}

export default CountTitle;