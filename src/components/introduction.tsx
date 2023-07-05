import CSS from '../styles/introduction.module.css';
import { ReactComponent as PDFIcon } from '../resources/svg/pdf.svg';

export const Introduction = () => {
  const openCV = () => {
    const link = document.createElement('a');
    link.href = '/files/my-CV.pdf';
    link.download = 'Rokas Andrijauskas CV.pdf';
    link.click();
  }

  return (
    <div className={CSS.container}>
      <h1>About me</h1>
      <p>I am a full-stack developer who recently graduated from mechatronic studies in Lithuania. I have completed courses in artificial intelligence (Python) and embedded programming (C). In my spare time, I have developed a couple of Android games and apps. Additionally, I successfully finished a web development course at <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer">The Odin Project</a>. In my spare time, I enjoy working out, meditating, expanding my knowledge in artificial intelligence, and working on new projects.
      </p>
      <div className={CSS.downloadCV} onClick={openCV}><PDFIcon className={CSS.PDFIcon}/><span className="text"> Download CV</span></div>
    </div >
  );
}