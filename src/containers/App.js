import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="main-content">
<ul id="slide-out" className="side-nav">
  <li>
    <div className="user-view">
      <div className="background">
        <img src=""/>
      </div>
      <a href="#!user"><img className="miniUserPic" src="/media/profPic.jpg"/></a>
      <a href="#!name"><span className="green-text name">Susie Smith</span></a>
      <a href="#!email"><span className="green-text email">meowcatmeow@gmail.com</span></a>
    </div>
  </li>
  <li><a href="/profile"><i className="material-icons">account_circle</i>My Pet Profile</a></li>
  <li>
    <div className="divider"></div>
  </li>
  <li><a className="subheader">Activity</a></li>
  <li><a href="#!">Notifications</a></li>
  <li><a className="waves-effect" href="/bulletinboard">My Neighborhood Bulletin</a></li>
  <li><a className="waves-effect" href="/sugar">My Cups of Sugar</a></li>
  <li><a className="waves-effect" href="/sugar">Log Out</a></li>
</ul>


  <nav className="lighten-1" role="navigation">
    <div className="nav-wrapper" id="navbar">
      <button data-activates="slide-out" className="button-toggle-profile waves-effect waves-light btn " id="button-toggle-profile">Navigate Pet Opair</button>
      <a id="logo-container" href="/" className="brand-logo"><img className="navLogo" src="/media/Petopair.png"/></a>
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="badges.html">About</a></li>
        <li className="divider"></li>
        <li><a href="#!">Contact</a></li>
        <li className="divider"></li>
        <li><a href="#!">Disclaimer</a></li>
      </ul>

      <ul className="right hide-on-med-and-down">
        <li><a href="badges.html">About</a></li>
        <li><span>|</span></li>
        <li><a href="#!">Contact</a>|</li>
        <li><span>|</span></li>
        <li><a href="#!">Disclaimer</a></li>

      </ul>
      <ul className="right show-on-med-and-down hide-on-large-only  ">
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons right">menu</i></a></li>
      </ul>
    </div>
  </nav>


  <div className="section no-pad-bot petBackground" id="index-banner">
    <div className="container">
      <h1 className="header center col s6"><img className="mainLogo" src="/media/Petopair.png"/></h1>
      <div className="row center">
        <h5 className="header col s12 light">A co-op for neighbors to exchange free petsitting favors. Meow. Woofwoof.</h5>
      </div>
      <div className="row center">
        <a href="/signup" id="signUpButton" className="btn-large waves-effect waves-light">Sign Up</a>
        <button type="button" className="btn-large waves-effect waves-light" data-toggle="modal" data-target="#myModal">Login</button>
      </div>


      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s4 m4">
              <div className="icon-block">
                <h2 className="center"><i className="material-icons">pets</i></h2>
                <h5 className="center">Love Thy Neighbors' Pets</h5>

                <p className="light">Want to hang out with that cute dog next door that you always see strutting around the neighborhood? Now is your chance! Pet OPair provides a platform for pet parents to notify their neighbors when they need their pets taken care of.</p>
              </div>
            </div>

            <div className="col s4 m4">
              <div className="icon-block">
                <h2 className="center"><i className="material-icons">location_city</i></h2>
                <h5 className="center">Trust Thy Neighbor With Your Pets</h5>

                <p className="light">Members of the Pet OPair community all must pass background checks. Further, pet parents must be upfront and thorough about the level of care their pets require. We believe compassionate pet parents can use their discretion to trust other
                  compassionate pet parents.</p>
              </div>
            </div>

            <div className="col s4 m4">
              <div className="icon-block">
                <h2 className="center"><i className="material-icons">accessibility</i></h2>
                <h5 className="center">Give a little, take a little.</h5>

                <p className="light">OPair is our cute way of spelling the French word "Au Pair", which literally means "on equal terms." Au Pair was originally used as an adjective to describe an arrangement between two parties paid for by the exchange of mutual service.
                  Pet OPair is just that: neighbors offering petsitting favors in order to receive petsitting favors.</p>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About Us</h5>
            <p className="grey-text text-lighten-4">Pet OPair has three missions. One, to relieve all pet parents of financial stress and worry when needing petsitters. Two, to strengthen neighborhoods. Three, to enhance the lives of all animals. </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Adopt!</h5>
            <ul>
              <li><a className="white-text" href="http://www.rmfr-colorado.org">RMFR</a></li>
              <li><a className="white-text" href="http://www.ddfl.org">Dumb Friends League</a></li>
              <li><a className="white-text" href="https://maxfund.org">MaxFund</a></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Contact</h5>
            <ul>
              <li><a className="white-text" href="#!">Email</a></li>
              <li><a className="white-text" href="#!">Phone</a></li>
              <li><a className="white-text" href="#!">Leasing Office</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          Founded in <a className="orange-text text-lighten-3" href="https://github.com/JGertler">Denver, CO</a>
        </div>
      </div>
    </footer>

    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="wrapper modalContainer">
            <form className="form-signin">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h2 className="form-signin-heading">Please login</h2>
              <div id="error-div"></div>
              <input type="text" className="form-control" name="username" placeholder="Username" id="login-name" required="" autoFocus=""/>
              <input type="password" className="form-control" name="password" id="login-password" placeholder="Password" required=""/>
              <label className="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me</label>
              <button className="btn btn-lg btn-primary btn-block" type="submit" id="login-btn">Login</button>
            </form>
            <p>Need an account? <a href="/signup">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
    );
  }
}

export default App;
