import React from "react";
import '../styles/contact.css';
import { SocialIcon } from 'react-social-icons';
import { animated, useSpring } from '@react-spring/web'

export const Contact = () => {
  const styles = useSpring({
    from: {
      opacity: 0.5
    },
    to: {
      opacity: 1
    }
  })

  return (
    <div id="contact-container">
      <h1>Contact me</h1>
      <animated.div style={styles} className="flex-horizontal">
        <SocialIcon className="bounce" target="_blank" url="https://github.com/idinyte" />
        <SocialIcon className="bounce" url="mailto:rokasandrijauskas10.02@gmail.com" />
        <SocialIcon className="bounce" target="_blank" url="https://www.linkedin.com/in/rokas-andrijauskas-a329a127a/" />
      </animated.div>
    </div >
  );
}