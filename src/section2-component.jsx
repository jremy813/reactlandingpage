import React from "react";
import "./section2-component.css";
import Section2Logo from "./assets/illustration-stay-productive.png";
import Profile1 from "./assets/profile-1.jpg";
import Profile2 from "./assets/profile-2.jpg";
import Profile3 from "./assets/profile-3.jpg";

function Section2() {
  return (
    <div className="section2">
      <div className="sec2grid">
        <div className="hero2">
          <img src={Section2Logo} />
        </div>
        <div className="sec2info">
          <h2>Stay productive, wherever you are </h2>
          <p className="p1">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share your files and folders with friends, family and
            colleagues for live collaboration. No email attachments required.
          </p>
          <a href="#home">See how Fylo works</a>
        </div>
      </div>
      <div className="testimonials">
        <div className="boxes">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profileimgs">
            <img className="profiles" src={Profile1} alt="satish patel" />
            <div>
              <h4>Satish Patel</h4>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className="boxes">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profileimgs">
            <img className="profiles" src={Profile2} alt="bruce mckenzie" />
            <div>
              <h4>Bruce McKenzie</h4>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className="boxes">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profileimgs">
            <img className="profiles" src={Profile3} alt="iva boyd" />
            <div>
              <h4>Iva Boyd</h4>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
