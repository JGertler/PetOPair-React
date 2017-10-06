import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import registerServiceWorker from './components/registerServiceWorker';
import {Button, Icon} from 'react-materialize';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
