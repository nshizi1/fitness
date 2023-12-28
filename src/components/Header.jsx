import React, {useRef} from 'react';

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    
  }
  return (
    <header>
      <div className="logo">
        <img src={require('../assets/images/logo.png')} alt="logoImage" />
      </div>
      <div className="links" ref={navRef} >
        <ul>
          <li onClick={showNavbar}><a href="#home">Home</a></li>
          <li onClick={showNavbar}><a href="#about">About Us</a></li>
          <li onClick={showNavbar}><a href="#class">Our Classes</a></li>
          <li onClick={showNavbar}><a href="#team">Team</a></li>
          <li onClick={showNavbar}><a href="#pricing">Pricing</a></li>
          <li onClick={showNavbar}><a href="#schedule">Schedule</a></li>
          <li onClick={showNavbar}><a href="#gallery">Gallery</a></li>
          <li onClick={showNavbar}><a href="#contact">Contacts</a></li>
          <i class="fa-solid fa-xmark" onClick={showNavbar}></i>
        </ul>
      </div>
      <i class="fa-solid fa-bars" onClick={showNavbar}></i>
    </header>
  )
}

export default Header;
