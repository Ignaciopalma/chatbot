import axios from "axios";
import React, {Component} from "react";

class InputBox extends Component {

    state = {
        content: ''
    };

    onHandlerEvent = (event) => {
        this.setState({content: event.target.value});
    };

    componentDidMount() {
        const uri = "/send-message";

        function addMessage() {
            const message = {
                content: this.state.content,
                type: 'sent'
            };

            this.props.post(message);

            axios.post(uri, message)
                .then(response => {
                        this.props.post(response.data);
                        this.setState({content: ''});
                    }
                );
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                addMessage.call(this);
            }
        }, false);
    }

    render() {
        return (
            <input onChange={this.onHandlerEvent} value={this.state.content} className="InputBox"
                   placeholder={"Type your message..."}/>
        );
    }
}

export default (InputBox);