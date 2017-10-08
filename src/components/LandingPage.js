import React, { Component } from 'react';
import Navigation from 'components/Navigation'
import SignInModal from 'components/SignInModal';
import {Button} from 'react-materialize';


class LandingPage extends Component {
  render() {
    return (
<div className="main-content">

  <Navigation trigger={<Button className="button-toggle-profile waves-effect waves-light btn">Sniff Around</Button>} options={{ closeOnClick: true }}/>

  <div className="section no-pad-bot petBackground" id="index-banner">
    <div className="container">
      <h1 className="header center col s6"><img className="mainLogo animated bounceIn" alt="main logo" src="/media/Petopair.png"/></h1>
      <div className="row center">
        <h5 className="header col s12 light">A co-op for neighbors to exchange free petsitting favors. Meow. Woofwoof.</h5>
      </div>
      <div className="row center">
        <a href="/signup" id="signUpButton" className="btn-large waves-effect waves-light">Sign Up</a>
      <SignInModal/>
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
</div>
</div>
    );
  }
}


export default LandingPage;
