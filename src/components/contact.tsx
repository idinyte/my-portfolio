import CSS from '../styles/contact.module.css';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
    <div className={CSS.container} id="contact">
      <h1>Contact me</h1>
      <div className={CSS.flexHorizontal}>
        <SocialIcon className={CSS.hoverAnim} target="_blank" url="https://github.com/idinyte" />
        <SocialIcon className={CSS.hoverAnim} url="mailto:rokasandrijauskas10.02@gmail.com" />
        <SocialIcon className={CSS.hoverAnim} target="_blank" url="https://www.linkedin.com/in/rokas-andrijauskas-a329a127a/" />
      </div>
    </div >
  );
}