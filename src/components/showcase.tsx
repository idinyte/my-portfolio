import React from "react";
import CSS from '../styles/showcase.module.css';
import { ShowcaseItem } from "./showcaseItem";
import pongStar from '../resources/images/pong-star.png';
import flightBooker from '../resources/images/flight-booker.png';
import chess from '../resources/images/chess.png';
import dashboard from '../resources/images/dashboard.png';
import sketch from '../resources/images/sketch.png';
import calculator from '../resources/images/calculator.png';

export const Showcase = () => {
  return (
    <div className={CSS.container}>
      <h1>Some of the things I made</h1>
      <section className={CSS.grid}>
        <ShowcaseItem img={pongStar} title="Pong star" description="Android puzzle game made using Unity3D and C#."
          view="https://play.google.com/store/apps/details?id=com.MomsBasementStudio.PongStar" />
        <ShowcaseItem img={chess} title="Chess" description="A game of chess made in ruby that is played in terminal."
          code="https://github.com/idinyte/command-line-chess" />
        <ShowcaseItem img={calculator} title="Javascript calculator" description="A simple calculator."
          view="https://idinyte.github.io/simple-calculator/" code="https://github.com/idinyte/simple-calculator" />
        <ShowcaseItem img={dashboard} title="Admin dashboard" description="CSS responsive design concept using grid and flexbox."
          view="https://idinyte.github.io/Project-Admin-Dashboard/" code="https://github.com/idinyte/Project-Admin-Dashboard" />
        <ShowcaseItem img={flightBooker} title="Simple flight booker" description="Flight booking website that uses database, advanced forms and mailers."
          code="https://github.com/idinyte/odin-flight-booker" />
        <ShowcaseItem img={sketch} title="Etch a sketch" description="Unleash your artistic talent."
          view="https://idinyte.github.io/etch-a-sketch/" code="https://idinyte.github.io/etch-a-sketch/" />
      </section>
    </div >
  );
}