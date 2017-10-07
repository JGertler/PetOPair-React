// initial rendering of the ALL React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import LandingPage from './containers/LandingPage';
import registerServiceWorker from './components/registerServiceWorker';
// using ES6 modules
// import { Router, Route, Switch } from 'react-router'

// using CommonJS modules
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Switch = require('react-router').Switch

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
