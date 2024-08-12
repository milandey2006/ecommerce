import React, { useState } from 'react';
import logo from '../Images/logo.jpeg';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.css';

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <img src={logo} alt="Logo" className='w-12 m-4' />

        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <a href="tel:8080808109">Get In Touch</a>
          </ul>

          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
