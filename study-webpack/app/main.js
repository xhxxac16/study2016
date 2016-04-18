// ES6
import React from 'react';
// import ReactDOM from 'react-dom';
import Hello from './component.jsx';

main();
function main(){
	// ReactDOM.render(<Hello />, document.getElementById('app'));
	React.render(<Hello />, document.getElementById('app'));
}