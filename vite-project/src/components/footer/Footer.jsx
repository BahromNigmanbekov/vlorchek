import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";

function Footer() {
  // Menyu elementlarini massivda saqlaymiz (takror yozmaslik uchun)
  const footerLinks = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact Us" },
    
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* === FOOTER TOP === */}
        <div className="footerTop">
          <div className="footerLogos">
            <NavLink to="/" className="black">
              <h1 className="footerLogo">
                <span className="gray">Velor</span>
              </h1>
            </NavLink>
            <span>Velor. / Arrivals</span>
          </div>

          <ul className="footerList">
            {footerLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "activee" : "navLink"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* === FOOTER BOTTOM === */}
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p className="spann">© 2019 Velor. All rights reserved</p>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
          </div>

          <div className="footerBottomRight">
            <a href="https://www.instagram.com/1paxta/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <TbBrandYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
