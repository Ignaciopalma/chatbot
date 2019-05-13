import React from "react";
import {connect} from "react-redux";

const MessageBox = (props) => {

    return (
        <div className="MessageBox">
            <div className="TitleBox">
                MessageBox
            </div>
            <div className="MessageList">
                {
                    props.messages.map(function (text) {
                        let messageType = text.type;
                        return (
                            <Message className={messageType} text={text.content}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

const Message = (props) => {
    var classType = "message " + props.className;
    return (
        <div className={classType}><span className={props.className}>{props.text}</span></div>
    );
};

function mapStateToProps(state) {
    return {messages: state.messages};
}

export default connect(mapStateToProps)(MessageBox);