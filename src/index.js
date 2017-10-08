import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'components/LandingPage';
// import '/containers/App.css';
import LandingPage from 'components/LandingPage';
// initial rendering of the ALL React DOM using ES6 modules

import './containers/index.css';
import registerServiceWorker from './components/registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
         super(props);
         //history API (compatible with most browsers)
         this.history = window.history;

         this.getRouteCurrent = this.getRouteCurrent.bind(this);
         this.linkClicked = this.linkClicked.bind(this);
         this.updateDisplay = this.updateDisplay.bind(this);
     }
     //
    getRouteCurrent() {
        const stringRouteCurrentFull = String(document.location);
        const arrayRouteCurrentParts = stringRouteCurrentFull.split('/');
        return arrayRouteCurrentParts[arrayRouteCurrentParts.length - 1];
    }

    linkClicked(route) {
        this.history.pushState(null, route, route);
        this.updateDisplay();
    }
    updateDisplay() {
        // document.querySelectorAll('.content-navigation').forEach(element => {
        //     element.style.display = 'none';
        // });

        var stringRouteCurrent = this.getRouteCurrent();

        if (stringRouteCurrent === 'main') {
            document.querySelector('#LandingPage').style.display = 'block';
        }
        else if (stringRouteCurrent === 'staff') {
            document.querySelector('.Staff').style.display = 'block';
        }
        else if (stringRouteCurrent === 'about') {
            document.querySelector('.About').style.display = 'block';
        }
        else if (stringRouteCurrent === 'menu') {
            document.querySelector('.Menu').style.display = 'block';
        }
        else if (stringRouteCurrent === 'calendar') {
            document.querySelector('.Calendar').style.display = 'block';
        }
        else if (stringRouteCurrent === 'badges') {
            document.querySelector('.Badges').style.display = 'block';
        }
        else if (stringRouteCurrent === 'messaging') {
            document.querySelector('.Messaging').style.display = 'block';
        }
        else {
            this.history.replaceState(null, "patrons", "patrons");
            document.querySelector('.Patrons').style.display = 'block';
        }

        this.drawer.open = false;
    }
};

ReactDOM.render(<LandingPage />, document.getElementById('LandingPage'));
registerServiceWorker();

export default Navigation;
