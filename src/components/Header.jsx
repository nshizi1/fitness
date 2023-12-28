import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={require('../assets/images/logo.png')} alt="logoImage" />
      </div>
      <div className="links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#class">Our Classes</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
      <div className="hamburger">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  )
}

export default Header;
