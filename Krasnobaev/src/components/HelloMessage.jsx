import React from "react";

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        this.setState((prev) => ({messages: [...prev.messages, "click!"]}));
    }

	render() {
        const { messages } = this.state;
		return (
            <div>
                <h2>Hi , {this.props.name}</h2>
                {messages.map((val,i) => (
                    <p key={i.toString()}>{val}</p>
                ))}
                <button onClick={()=>this.addMessage()}>Click me!</button>
            </div>
        );
	}
}

export default HelloMessage;