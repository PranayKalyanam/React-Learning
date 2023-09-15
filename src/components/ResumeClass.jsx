import { Component } from "react";
import { render } from "react-dom";


class Resume extends Component{
  
    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>This is Resume Class for Destruction of props</h1>
                <h2>Name : {name} </h2>
            </div> 
        ); 
    }
}

export default Resume