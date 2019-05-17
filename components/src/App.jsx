import React, {Component} from 'react';
import InputBox from './components/inputbox';
import MessageBox from './components/messagebox';
import {connect} from "react-redux";
import StatsBox from './components/statsbox';
import {updateMessage} from "./actions";

import './App.css';

class App extends Component {

    onHandlerPost = (input) => {
        this.props.dispatch(updateMessage(input));
    };

    render() {
        return (
            <div>
                <header className="titleBox"> BalboApp</header>
                <div className="App">
                    <StatsBox/>
                    <div className="wrapper">
                        <div className="chatBox">
                            <MessageBox/>
                            <InputBox post={this.onHandlerPost}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default connect()(App);