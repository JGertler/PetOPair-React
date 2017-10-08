import React, { Component } from 'react';
import reactDOM from 'react-dom';


class Footer extends Component {
  render() {
    return (
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
    );
  }
};

export default Footer;
