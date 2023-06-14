import React from "react";
import '../styles/contact.css';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
    <div id="contact_container">
      <h1>Contact me</h1>
      <SocialIcon url="https://github.com/idinyte" />
      <SocialIcon url="mailto:rokasandrijauskas10.02@gmail.com" />
      <SocialIcon url="https://www.linkedin.com/in/rokas-andrijauskas-a329a127a/" />
    </div >
  );
}