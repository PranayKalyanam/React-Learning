import { Component } from "react";

class ClassEvent extends Component {
    handleEvent() {
        console.log("Button is Clicked")
    }
    render() {
        return (
            <div>
                <h1>This is a class component event </h1>
                <button onClick={this.handleEvent}>Click Here</button>
            </div>

        );
    }

}

export default ClassEvent