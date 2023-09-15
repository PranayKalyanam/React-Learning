// Make a class Component

import { Component } from "react";

class Message extends Component {
    //In class we use render method to return html
    render() {
        return (
          <>  
          {/* this html is jsx (Jawa Script XML) */}
            <h2>This is Class Component </h2>
            <h3>Message : {this.props.contentMessage } {this.props.messagecode}</h3>
            </>
        );
    }
}

export default Message