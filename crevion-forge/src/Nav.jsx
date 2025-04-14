import React from 'react';
import './Nav.css'
import crevionLogo from './assets/images/official_crevion_logo-removebg-preview.png'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <header className="navBar">  
      <div id="contain">

        <Link to='/'>
          <img 
          src={crevionLogo} 
          alt="logo" 
          id="logo"
        /></Link>
        <Link to='/'><h1 id="title">CREVION FORGE</h1></Link>
      </div>
      <nav className="containNavItems">
        <ul className="navItems">
          <a href="#offersContainID"><li>OFFERS</li></a>
          <a href="#featID"><li>BENEFITS</li></a>
          <a href="#teamID"><li>TEAM</li></a>
          <a href="#contactID"><li>CONTACT</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
