import React from "react";
import '../styles/showcase.css';
import { ShowcaseItem } from "./showcaseItem";
import pongStar from '../resources/images/pong-star.png';
import privateEvents from '../resources/images/private-events.png';
import flightBooker from '../resources/images/flight-booker.png';
import ticTacToe from '../resources/images/tic-tac-toe.png';
import chess from '../resources/images/chess.png';
import dashboard from '../resources/images/dashboard.png';
import cvMaker from '../resources/images/cv-maker.png';
import sketch from '../resources/images/sketch.png';
import calculator from '../resources/images/calculator.png';

export const Showcase = () => {
  return (
    <div className="showcase-container">
      <h1>Some of the things I made</h1>
      <h2>(first open might take some time)</h2>
      <section className="grid-container">
        <ShowcaseItem img={pongStar} title="Pong star" description="Android game made in unity."
          view="https://play.google.com/store/apps/details?id=com.MomsBasementStudio.PongStar" />
        <ShowcaseItem img={chess} title="Chess" description="A game of chess made in ruby. It is played in terminal."
          code="https://github.com/idinyte/command-line-chess" />
        <ShowcaseItem img={ticTacToe} title="Tic Tac Toe" description="A game of tic-tac-toe that uses AI."
          view="https://replit.com/@idinyte/Tic-tac-toe" code="https://github.com/idinyte/Tic-Tac-Toe-" />
        <ShowcaseItem img={calculator} title="Javascript calculator" description="Just a simple calculator."
          view="https://idinyte.github.io/simple-calculator/" code="https://github.com/idinyte/simple-calculator" />
        <ShowcaseItem img={dashboard} title="Admin dashboard" description="CSS responsive design concept using grid and flexbox."
          view="https://idinyte.github.io/Project-Admin-Dashboard/" code="https://github.com/idinyte/Project-Admin-Dashboard" />
        <ShowcaseItem img={cvMaker} title="CV maker" description="Prototype made with react and typescript."
          view="https://idinyte.github.io/cv-builder/" code="https://github.com/idinyte/cv-builder" />
        <ShowcaseItem img={flightBooker} title="Simple flight booker" description="Flight booking website that uses database, advanced forms and mailers."
          code="https://github.com/idinyte/odin-flight-booker" />
        <ShowcaseItem img={sketch} title="Etch a sketch" description="Unleash your artistic talent."
          view="https://idinyte.github.io/etch-a-sketch/" code="https://idinyte.github.io/etch-a-sketch/" />
        <ShowcaseItem img={privateEvents} title="Private events" description="Website with database for creating events."
          code="https://github.com/idinyte/private-events" />

      </section>
    </div >
  );
}