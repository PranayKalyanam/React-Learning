import { Component } from "react";

class Form extends Component {
    state = {
        firstName: "",
        lastName: ""
    }
    handleFnameEvent = (event) => {
        this.setState({
            firstName: event.target.value,
        })
        // console.log(this.state.firstName)
    }
    handleLnameEvent = (event) => {
        this.setState({
            lastName: event.target.value,
        })
        // console.log(this.state.firstName)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const name = {
            fname: this.state.firstName,
            lname: this.state.lastName,
        }
        console.log(name);
    }
    render() {
        return (
            <div>
                <h1>Form</h1>
                <form action="post" onSubmit={this.handleSubmit}>
                    <span>Name:  </span>
                    <input
                        onChange={this.handleFnameEvent}
                        type="text"
                        placeholder="First Name: Pranay"
                        value={this.state.firstName} />
                    <input
                        onChange={this.handleLnameEvent}
                        type="text"
                        placeholder="Last Name: Kalyanam"
                        value={this.state.lastName} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form