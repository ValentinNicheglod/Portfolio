import React from 'react';

import '../App.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Greeting from '../components/Greeting';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SkillsMobile from '../components/SkillsMobile';

const Inicio = () => {
  document.addEventListener('contextmenu', (e) => {
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  }, false);

  const images = [];
  function preload() {
    setTimeout(() => {
      for (let i = 0; i < preload.arguments.length; i += 1) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    }, 3000);
  }

  preload(
    'https://img.icons8.com/fluent/96/000000/iphone.png',
    'https://img.icons8.com/fluent/96/000000/monitor.png',
    'https://img.icons8.com/fluent/96/000000/checkmark.png',
  );

  const smallScreen = window.screen.width < 600;

  return (
    <div className="h-100">
      <Greeting smallScreen={smallScreen} />
      <About />
      {smallScreen ? <SkillsMobile /> : <Skills />}
      <Projects
        smallScreen={smallScreen}
      />
      <Contact
        smallScreen={smallScreen}
      />
    </div>
  );
};

export default Inicio;
