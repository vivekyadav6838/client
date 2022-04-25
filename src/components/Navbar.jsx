import React from 'react';
import  mentorPlusLogo from '../assets/mentorPlusLogo.svg';

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="container display">
            <div className="nav-brand display">
                <img src={mentorPlusLogo}/>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Plans & Pricing</a>
                    <a href="#">FAQ's</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="nav-btns">
                <button className="nav-btn">Login</button>
                <button className="nav-btn b2-h">SignUp</button>
            </div>
        </div>
      </div>
  )
}

export default Navbar;
