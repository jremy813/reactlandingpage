import React from "react";
import "./section1-component.css";
import fileIcon from "./assets/icon-any-file.svg";
import computerIcon from "./assets/icon-access-anywhere.svg";
import checkIcon from "./assets/icon-collaboration.svg";
import securityIcon from "./assets/icon-security.svg";

function Section1() {
  return (
    <div className="section1">
      <div>
        <img src={computerIcon} alt="pc icon" />
        <h3>Acess your files, anywhere</h3>
        <p>
          The ability to usue a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div>
        <img src={securityIcon} alt="security icon" />
        <h3>Security you can trust</h3>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div>
        <img src={checkIcon} alt="check mark icon" />
        <h3>Real-time collaboration</h3>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div>
        <img src={fileIcon} alt="file icon" />
        <h3>Store any type of file</h3>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  );
}

export default Section1;
