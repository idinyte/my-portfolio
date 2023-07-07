import React, { useState, useEffect, useRef } from "react";
import CSS from "../styles/imageBeforeAndAfter.module.css";

interface imgBeforeAndAfter {
  foregroundImg: any;
  backgroundImg: any;
}

export const ImageBeforeAndAfter = (props: imgBeforeAndAfter) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };

  const [sliderContainer, setSliderContainer] = useState(
    document.getElementsByClassName(CSS.slider)[0] as HTMLElement
  );

  const [sliderButton, setSliderButton] = useState(
    document.getElementsByClassName(CSS.sliderButton)[0] as HTMLElement
  );

  useEffect(() => {
    setSliderContainer(
      document.getElementsByClassName(CSS.slider)[0] as HTMLElement
    );
    setSliderButton(
      document.getElementsByClassName(CSS.sliderButton)[0] as HTMLElement
    );
  }, []);

  const isMouseDown = useRef<boolean>(false);

  if (sliderContainer && sliderButton) {
    sliderContainer.onmousemove = (event) => {
      const buttonRect = sliderButton.getBoundingClientRect();
      if (
        event.clientX >= buttonRect.left &&
        event.clientX <= buttonRect.right
      ) {
        sliderContainer.style.cursor = "ew-resize";
      } else if (isMouseDown.current === false) {
        sliderContainer.style.cursor = "default";
      }
    };

    sliderContainer.onmouseup = () => {
      isMouseDown.current = false;
      sliderContainer.style.cursor = "default";
    };

    sliderContainer.onmousedown = () => {
      isMouseDown.current = true;
      sliderContainer.style.cursor = "ew-resize";
    };
  }

  return (
    <div className={CSS.container}>
      <div
        className={CSS.img}
        style={{ backgroundImage: `url(${props.foregroundImg})` }}
      ></div>
      <div
        className={CSS.img}
        style={{
          width: `${sliderValue}%`,
          backgroundImage: `url(${props.backgroundImg})`,
        }}
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        className={CSS.slider}
        name="slider"
        id="slider"
        onChange={handleSliderChange}
      ></input>
      <div
        className={CSS.sliderButton}
        style={{ left: `calc(${sliderValue}% - 18px)` }}
      ></div>
      <div
        className={CSS.sliderDivider}
        style={{ left: `calc(${sliderValue}% - 4px)` }}
      ></div>
    </div>
  );
};
