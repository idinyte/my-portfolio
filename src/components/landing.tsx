import { useEffect } from "react";
import CSS from '../styles/landing.module.css';

export const Landing = () => {
  const initializeAnimation = () => {
    // if web animations API is supported
    if (document.body.animate != null) {
      const container = document.getElementById('landingParticles');
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

    let offsetX = Math.round(Math.random()) === 0 ? 30 * Math.random() : -30 * Math.random();
    let offsetY = -40 * Math.random() - 40;

    const animation_keyframes = [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x}px, ${y}px) scale(0.3)`,
        opacity: 0
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${x + offsetX / 2}px, ${y + offsetY / 2}px) scale(1.5)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${x + offsetX}px, ${y + offsetY}px) scale(0.3)`,
        opacity: 0
      }
    ]

    const animation_settings = {
      duration: 4000 + Math.random() * 500,
      easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
      iterations: Infinity,
      delay: -2000 + (Math.random()-0.5)*4000
    };

    particle.animate(animation_keyframes, animation_settings);
  }


  useEffect(() => {
    initializeAnimation();
  }, []);

  return (
    <div className={CSS.container} id="landingParticles">
      <div>
        <h1>Hi, I'm Rokas</h1>
        <h3>full stack developer</h3>
      </div>
      <div className={CSS.videoContainer}>
      <video loop autoPlay={true} muted >
          <source src={process.env.PUBLIC_URL + '/video/brain.mp4'} type="video/mp4" />
          Sorry, your browser doesn't support videos.
      </video>
      </div>
    </div>
  );
}