import React from "react";
import '../styles/contact.css';

export const Contact = () => {
  return (
    <div id="contact_container">
      <h1>Contact me</h1>
      <button id="email" onClick={() => window.open('mailto:rokasandrijauskas10.02@gmail.com')}><span className="material-symbols-outlined">
        mail
      </span>email
      </button>
    </div >
  );
}