import React from "react";
import "./hero-component.css";
import HeroLogo from "./assets/illustration-intro.png";

function Hero() {
  return (
    <div className="hero">
      <img src={HeroLogo} alt="hero" />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button>Get Started</button>
    </div>
  );
}

export default Hero;
