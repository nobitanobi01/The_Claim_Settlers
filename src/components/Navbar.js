import React from 'react'
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-text">Get The Justice You Deserve!</div>
      <button className="navbar-btn">Do I Qualify?</button>
    </div>
  )
}

export default Navbar
