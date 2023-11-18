import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          mode: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff', // White color for stars
          },
          links: {
            color: '#ffffff', // White color for star trails
            distance: 160,
            enable: true,
            opacity: 0.1, // Lower opacity for a subtle effect
            width: 1,
          },
          collisions: {
            enable: true, 
          },
          move: {
            direction: 'random',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.7,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150, 
          },
          opacity: {
            value: 0.6, // Higher opacity for visibility
          },
          shape: {
            type: 'circle', // Use only circles for a star-like effect
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
