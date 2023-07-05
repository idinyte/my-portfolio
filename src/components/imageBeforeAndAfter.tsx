import React, { useState } from 'react';
import CSS from '../styles/imageBeforeAndAfter.module.css';

interface imgBeforeAndAfter{
  foregroundImg: any,
  backgroundImg: any,
}

export const ImageBeforeAndAfter = (props: imgBeforeAndAfter) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };

  return (
    <div className={CSS.container}>
      <div className={CSS.img} style={{backgroundImage: `url(${props.foregroundImg})`}}></div>
      <div className={CSS.img} style={{width: `${sliderValue}%`, backgroundImage: `url(${props.backgroundImg})`}}></div>
      <input type="range" min="0" max="100" value={sliderValue} className={CSS.slider} name='slider' id="slider" onChange={handleSliderChange}></input>
      <div className={CSS.sliderButton} style={{left: `calc(${sliderValue}% - 18px)`}}></div>

    </div>
  );
}