import React, {Component} from "react";
import {connect} from "react-redux";

class MessageBox extends Component {

    render() {
        return (
            <div>
                <div className="titleBox">
                    MessageBox
                </div>
                <ul className="messageBox">
                    {
                        this.props.messages.map(function (text) {
                            let messageType = text.type;
                            return (
                                <Message className={messageType} text={text.content}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

class Message extends Component {

    componentDidMount() {
        let box = document.querySelector(".messageBox");
        box.scrollTop = box.scrollHeight;
    }

    render() {
        let classType = "message " + this.props.className;
        return (
            <li className={"message " + classType}>
              {this.props.text}
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {messages: state.messages};
}

export default connect(mapStateToProps)(MessageBox);