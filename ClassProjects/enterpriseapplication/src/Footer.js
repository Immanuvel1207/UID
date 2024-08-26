import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 MobiTech</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
