import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

let store = createStore(reducer);

function reducer(state = {messages: []}, action) {
    if (action.type === "MESSAGE") {
        return {...state, messages : state.messages.concat(action.message)};
    } else {
        return state;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
