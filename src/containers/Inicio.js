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

  const urlImages = [
    'https://img.icons8.com/fluent/96/000000/iphone.png',
    'https://img.icons8.com/fluent/96/000000/monitor.png',
    'https://img.icons8.com/fluent/96/000000/checkmark.png',
    'https://valentinnicheglod.github.io/Portfolio/projects/mockups/notatky/inicio.jpg',
    'https://valentinnicheglod.github.io/Portfolio/projects/mockups/treebank/0.jpg',
    'https://valentinnicheglod.github.io/Portfolio/projects/mockups/mono/inicio.jpg',
  ];

  const images = [];

  (function preload() {
    setTimeout(() => {
      for (let i = 0; i < urlImages.length; i += 1) {
        images[i] = new Image();
        images[i].src = urlImages[i];
      }
    }, 3000);
  }());

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
