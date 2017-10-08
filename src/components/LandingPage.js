import React, { Component } from 'react';
import Navigation from 'components/Navigation'
import SignInModal from 'components/SignInModal';

import Footer from 'components/Footer'
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
  <Footer/>
</div>
</div>
    );
  }
}


export default LandingPage;
