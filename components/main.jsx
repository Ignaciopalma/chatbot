import React from 'react';
import ReactDOM from 'react-dom';

class Chatbot extends React.Component {
	render() {
		return (
			<h1>Chatbot app</h1>
		)
	}
}

export default Chatbot;

ReactDOM.render(
  <Chatbot />,
  document.getElementById('app')
);
