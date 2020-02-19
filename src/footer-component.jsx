import React from "react";
import "./footer-component.css";
import Logo from "./assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="grid flogo">
        <img src={Logo} alt="footer logo" />
        <p>
          Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eisusmod
          tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="grid">
        <p>+1-543-123-4567</p>
        <p>example@fylo.com</p>
      </div>
      <div className="grid about">
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div className="grid">
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
    </div>
  );
}

export default Footer;
