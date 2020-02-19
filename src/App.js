import React from "react";
import Header from "./header-component";
import Hero from "./hero-component";
import Section1 from "./section1-component";
import "./App.css";
import Section2 from "./section2-component";
import Footer from "./footer-component";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
