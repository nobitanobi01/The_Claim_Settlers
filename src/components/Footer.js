import React from "react";
import "../styles/Footer.css";
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Injury Claims Logo" />
        </div>

        <div className="footer-social">
          <h4  style={{ width:"30%", borderBottom: "1px solid #656464ff" }}>Social</h4>
          <div className="social-icons">
            <a href="/privacy-policy"><i className="fab fa-facebook-f"></i></a>
            <a href="/privacy-policy"><i className="fab fa-x-twitter"></i></a>
            <a href="/privacy-policy"><i className="fab fa-linkedin-in"></i></a>
            <a href="/privacy-policy"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-sitemap">
          <h4 style={{width:"35%", borderBottom: "1px solid #656464ff" }}> Sitemap</h4>
          <div className="sitemap-links">
            <a href="/privacy-policy" >Active Lawsuits</a>
            <a href="/privacy-policy">Open Settlements</a>
            <a href="/privacy-policy">Recent News</a>
            <a href="/privacy-policy">Class Actions FAQ</a>
            <a href="/privacy-policy">About Us</a>
            <a href="/privacy-policy">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/privacy-policy">Terms & Conditions</a> | 
          <a href="/privacy-policy">Partners</a> | 
          <a href="/privacy-policy">CA Residents Only - Do not sell my info</a> | 
          <a href="/privacy-policy">California Privacy</a> | 
          <a href="/privacy-policy">Unsubscribe</a>
        </div>
        <p style={{fontSize:"16px", color:"grey", textAlign:"center"}}>Copyright © Injury Claims 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
