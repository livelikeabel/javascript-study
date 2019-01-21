import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: 1
    }
    onIncrease = () => {
        this.setState(({value}) => ({value: value + 1}));
    }
    onDecrease = () => {
        this.setState((state) => {return {value: state.value - 1}})
    }
    render() {
        return (
            <div>
                <h1>카운터</h1>
                <h2>{this.state.value}</h2>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;