import React, { useEffect } from "react";
import '../styles/landing.css';
import programming from '../resources/videos/programming.mp4';
import exercising from '../resources/videos/exercising.mp4';
import meditating from '../resources/videos/meditating.mp4';
import reading from '../resources/videos/reading.mp4';

export const Landing = () => {
  const initializeAnimation = () => {
    // if web animations API is supported
    if (document.body.animate != null) {
      const container = document.getElementById('landing_container');
      if (container) {
        for (let i = 0; i < 50; i++) {
          createParticle(container);
        }
      }
    }
  }

  const createParticle = (container: HTMLElement) => {
    let particle = document.createElement('particle');
    container.appendChild(particle);
    const size = Math.floor(Math.random() * 3 + 4);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    const color = Math.floor((Math.random() * 0.4 + 0.6) * 255);
    // gray to white
    particle.style.background = `rgb(${color}, ${color}, ${color})`;

    const boundaries = container.getBoundingClientRect();
    let x = Math.random() * boundaries.width;
    let y = Math.random() * boundaries.height;

    let offsetX = Math.round(Math.random()) === 0 ? 30*Math.random() :-30*Math.random();
    let offsetY = -40*Math.random() -40;

    const animation_keyframes = [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x}px, ${y}px) scale(0)`,
        opacity: 0
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${x + offsetX/2}px, ${y + offsetY/2}px) scale(1)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${x + offsetX}px, ${y + offsetY}px) scale(0)`,
        opacity: 0
      }
    ]

    const animation_settings = {
      duration: 4000 + Math.random() * 2500,
      easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
      iterations: Infinity,
      delay: 4000*Math.random()
    };

    particle.animate(animation_keyframes, animation_settings);
  }

  const startVideoPlayer = () => {
    const player = document.getElementById('video_player')! as HTMLVideoElement;
    const playlist = [meditating, exercising, reading];
    let count = 1;

    const videoHandler = () => {
      // every second video is programming
      if (count % 2 === 0) {
        player.src = programming;
      }
      else {
        // the rest are from playlist array
        player.src = playlist[Math.floor(count / 2) % 3];
      }
      player.load();
      player.play();
      count++;
    }
    player.addEventListener('ended', videoHandler);
  }



  useEffect(() => {
    initializeAnimation();
    //startVideoPlayer();
    //<video id="video_player" src={programming} autoPlay muted></video>
  }, []);

  return (
    <div id="landing_container">
      <div>
        <h1>Hi, I'm Rokas</h1>
        <h3>full stack developer</h3>
      </div>
      <div id="video_container">
        
      </div>
    </div>
  );
}