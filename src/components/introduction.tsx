import CSS from "../styles/introduction.module.css";
import { ReactComponent as PDFIcon } from "../resources/svg/pdf.svg";
import { useEffect, useState, useRef } from "react";

export const Introduction = () => {
  const [hoverCircle, setHoverCircle] = useState(
    document.getElementById("hoverCircle")
  );
  const [downloadButton, setDownloadButton] = useState(
    document.getElementById("downloadCV")
  );

  const enterTime = useRef<number>(0);

  useEffect(() => {
    setHoverCircle(document.getElementById("hoverCircle"));
    setDownloadButton(document.getElementById("downloadCV"));
  }, []);

  const MoveCircleToCursor = (event: MouseEvent) => {
    const buttonRect = downloadButton!!.getBoundingClientRect();
    const right = 100 * (buttonRect.right - event.clientX ) / buttonRect.width;
    const top = 100 * (event.clientY - buttonRect.top) / buttonRect.height;
    hoverCircle!!.style.right = `calc( ${right}% - ${250}px )`;
    hoverCircle!!.style.top = `calc( ${top}% - ${250}px )`;
  }

  if(hoverCircle && downloadButton)
  {

    downloadButton.onmouseenter = (event) => {
      enterTime.current = new Date().getTime();
      hoverCircle.style.opacity = "0";
      hoverCircle.style.transform = "scale(1)";
      MoveCircleToCursor(event);
      hoverCircle.classList.remove(CSS.hoverAnimationExit);
      hoverCircle.classList.add(CSS.hoverAnimationEnter);
    }

    downloadButton.onmouseleave = (event) => {
      hoverCircle.style.opacity = "0";
      hoverCircle.style.transform = "scale(1)";
      MoveCircleToCursor(event);
      hoverCircle.classList.remove(CSS.hoverAnimationEnter);
      if(new Date().getTime() - enterTime.current > 200)
      {
        hoverCircle.classList.add(CSS.hoverAnimationExit);
      }
      
    }
  }

  return (
    <div className={CSS.container} id="introduction">
      <h1>About me</h1>
      <p>
        I am a recent graduate of Kaunas University of Technology, where I
        completed my Bachelor's degree in Mechatronics - a field focused on
        mechanical engineering, electronical engineering, and control systems.
        During my free time, I completed a comprehensive full-stack web
        development course at{" "}
        <a
          href="https://www.theodinproject.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Odin Project
        </a>
        , which equipped me with the necessary skills to design and develop
        dynamic web applications. I have developed a handful of web applications
        (Ruby/Javascript/React/Node/RESTful API/SQLite), mobile applications
        (Android Studio Kotlin) and games (Unity C#). In my free time I am
        reading, working out, teaching myself Danish and AI.
      </p>

      <a
        className={CSS.downloadCV}
        href="files/my-CV.pdf"
        download="Rokas Andrijauskas CV.pdf"
        id="downloadCV"
      >
        <span className={CSS.hoverCircle} id="hoverCircle"></span>
        <PDFIcon className={CSS.PDFIcon} />
        <span className="text"> Download CV</span>
      </a>
    </div>
  );
};
