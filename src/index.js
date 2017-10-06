// initial rendering of the ALL React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import registerServiceWorker from './components/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
