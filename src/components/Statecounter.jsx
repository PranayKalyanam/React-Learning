import { Component } from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        return (
            <div>
                <h1>Count is: {this.state.counter} </h1>

                <button onClick={this.increment}>Click Me to Increment</button>
                <button onClick={() => this.decrement()}> Click me to Decrement</button>
            </div>
        );
    }
}

export default Counter