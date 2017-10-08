// initial rendering of the ALL React DOM using ES6 modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'components/LandingPage';
// import '/containers/App.css';
import LandingPage from 'components/LandingPage';
import SignUp from 'components/Carousel';

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
     //creating variable getRouteCurrent, which should read the html route
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

      //front end routes
console.log("hello")
        var stringRouteCurrent = this.getRouteCurrent();

        if (stringRouteCurrent === 'main') {
            document.querySelector('#landingPageDiv').style.display = 'block';
        }
        else if (stringRouteCurrent === 'signup') {
            document.querySelector('#signUpDiv').style.display = 'block';
        }
        else {
            this.history.replaceState(null, "patrons", "patrons");
            document.querySelector('.Patrons').style.display = 'block';
        }

        this.drawer.open = false;
    }
};

ReactDOM.render(<LandingPage />, document.getElementById('landingPageDiv'));
registerServiceWorker();

// ReactDOM.render(<SignUp/>, document.getElementById('signUpDiv'));
// registerServiceWorker();

export default Main;
