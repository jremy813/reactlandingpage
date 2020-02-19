import React from "react";
import Logo from "./assets/logo.svg";
import "./header-component.css";
function Header() {
  return (
    <div className="header">
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
