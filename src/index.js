import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function time() {
    const element = (
      <div>
        <p> Today is: {new Date().toLocaleDateString()}.</p>
        <p> The time is: {new Date().toLocaleTimeString()}.</p>
      </div>
    );

ReactDOM.render(element, document.getElementById('root1'));
ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(time, 1000)
