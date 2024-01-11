import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <div className="info">
        <div className="social">
          <img src={require('../assets/images/logo.png')} alt="" />
          <h3>Social media</h3>
          <ul>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://wa.me/250788599511"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://www.instagram.com/direct/t/17846912225877089/"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>+250-788-599-511</p>
          <p>fitnessmo833@gmail.com</p>
          <p>Kigali, Kanombe</p>
          <p>kk 5 ave</p>
        </div>
        <div className="more">
          <h2>Find out more about us</h2>
          <p>Get Your Quote or Call: +250-791-847-408</p>
          <button>Request consultation</button>
        </div>
      </div>
      <div className="rights">
        <p><span>HO1_fitness program</span> &copy; {currentYear}. All rights reserved</p>
        <p>Established in 2020, HO1_fitness program gives a warm welcome to all abilities and all age-groups.We have fully qualified, experienced coaches who are on hand to assist and work with you at all times.</p>
      </div>
    </footer>
  )
}

export default Footer;
