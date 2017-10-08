import React, { Component } from 'react';
import { Button, SideNavItem, SideNav} from 'react-materialize';

class Navigation extends Component {
  render() {
    return (
      <nav className="lighten-1" role="navigation">
        <div className="nav-wrapper" id="navbar">
          <SideNav trigger={<Button className="button-toggle-profile waves-effect waves-light btn">Sniff Around</Button>} options={{ closeOnClick: true }}
            >
            <SideNavItem userView
              user={{
                background: 'img/office.jpg',
                image: '/media/profPic.jpg',
                name: 'Susie Smith',
                email: 'meowcatmeow@bark.com'
              }}
            />
            <SideNavItem href='/profile' icon='person_pin'>My Pet Profile</SideNavItem>
            <SideNavItem href='/sitterRequest'>Make a Sitter Request</SideNavItem>
            <SideNavItem divider/>
            <SideNavItem subheader icon='home'>Neighborhood</SideNavItem>
            <SideNavItem href='/notifications'>Notifications</SideNavItem>
            <SideNavItem waves href='/bulletin'>My Neighborhood Bulletin</SideNavItem>
            <SideNavItem href='/'>Logout</SideNavItem>
          </SideNav>
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
    );
  }
};

export default Navigation;
