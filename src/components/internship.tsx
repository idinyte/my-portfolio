import CSS from '../styles/internship.module.css';
import { useState } from "react";
import { ImageBeforeAndAfter } from './imageBeforeAndAfter';
import dashboardBefore from '../resources/images/compare/dashboardBefore2.png';
import dashboardAfter from '../resources/images/compare/dashboardAfter2.png';
import athletesBefore from '../resources/images/compare/athletesBefore2.png';
import athletesAfter from '../resources/images/compare/athletesAfter2.png';
import runsBefore from '../resources/images/compare/runsBefore2.png';
import runsAfter from '../resources/images/compare/runsAfter2.png';
import darkMode from '../resources/images/compare/darkMode2.png';
import lightMode from '../resources/images/compare/lightMode2.png';

export const Internship = () => {
  const [slides, _] = useState([<ImageBeforeAndAfter foregroundImg={dashboardBefore} backgroundImg={dashboardAfter}/>, 
  <ImageBeforeAndAfter foregroundImg={athletesBefore} backgroundImg={athletesAfter}/>, 
  <ImageBeforeAndAfter foregroundImg={runsBefore} backgroundImg={runsAfter}/>,
  <ImageBeforeAndAfter foregroundImg={lightMode} backgroundImg={darkMode}/>]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideButtonClick = (increment: number) => {
    let current = currentSlide;
    current += increment;
    if(current < 0)
      current = slides.length - 1;
    else if(current >= slides.length)
      current = 0;
    setCurrentSlide(current);
  }

  return (
    <div className={CSS.container}>
      <h1>My work at internship</h1>
      <section className={CSS.slideshow}>
        <button onClick={() => slideButtonClick(-1)} className={CSS.btn} style={{ transform: 'rotate(135deg)' }}></button>
        {slides[currentSlide]}
        <button onClick={() => slideButtonClick(1)} className={CSS.btn} style={{ transform: 'rotate(-45deg)' }}></button>
      </section>
    </div >
  );
}