import CSS from '../styles/introduction.module.css';
import { ReactComponent as PDFIcon } from '../resources/svg/pdf.svg';

export const Introduction = () => {
  return (
    <div className={CSS.container}>
      <h1>About me</h1>
      <p>
        I am a recent graduate of Kaunas University of Technology, where I completed my Bachelor's degree in Mechatronics - a field focused on mechanical engineering, electronical engineering, and control systems. During my free time, I completed a comprehensive full-stack web development course at <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer">The Odin Project</a>, which equipped me with the necessary skills to design and develop dynamic web applications. I have developed a handful of web applications (Ruby/Javascript/React/Node/RESTful API/SQLite), mobile applications (Android Studio Kotlin) and games (Unity C#).
        In my free time I am reading, working out, teaching myself Danish and AI.
      </p>
      <a className={CSS.downloadCV} href="files/my-CV.pdf" download="Rokas Andrijauskas CV.pdf"><PDFIcon className={CSS.PDFIcon} /><span className="text"> Download CV</span></a>
    </div >
  );
}