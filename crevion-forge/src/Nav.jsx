import React from 'react';
import Nav from './Nav.jsx'
const Nav = () => {
  return (
    <header className="navBar">  
      <div id="contain">
        <img 
          src="assets/images/official_crevion_logo-removebg-preview.png" 
          alt="logo" 
          id="logo"
        />
        <h1 id="title">CREVION FORGE</h1>
      </div>
      <nav className="containNavItems">
        <ul className="navItems">
          <li>OFFERS</li>
          <li>BENEFITS</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
