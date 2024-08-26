import React from 'react';
import './Header.css';
import logo from './assets/logo.jpeg';

function Header() {
  return (
    <header>
      {/* <div className="logo"><img src={logo} /></div> */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
