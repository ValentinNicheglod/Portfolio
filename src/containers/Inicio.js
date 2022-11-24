import React, { useState, useEffect, useRef } from 'react';

import '../App.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import SmallLogo from '../images/logos/Small.svg';

const Inicio = () => {
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  const firstSection = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
      document.body.classList.add('no-scroll');
      setTimeout(() => {
        document.body.classList.remove('no-scroll');
        setLoadingAnimation(false);
      }, 3300);
    }, 300);
  }, [firstSection]);

  document.addEventListener('contextmenu', (e) => {
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  }, false);

  const urlImages = [
    'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/ProjectBackground.png',
    'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/radley/Mockup%20Template.png',
    'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/notatky/V2/Inicio.jpg',
    'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/meteor/Login.jpg',
    'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/radley/Inicio.jpg',
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

  const isTablet = window.innerWidth < 991;
  const smallScreen = window.innerWidth < 770;
  const isMobile = window.innerWidth < 600;

  return (
    <>
      {loadingAnimation && (
        <>
          {pageLoaded && <img className="loading-logo" src={SmallLogo} alt="" />}
          <div className={pageLoaded ? 'loading-screen loading-animation' : 'loading-screen'} />
        </>
      )}
      <Greeting ref={firstSection} smallScreen={smallScreen} />
      {!loadingAnimation && (
        <>
          <About isSmallScreen={smallScreen} />
          <Skills isSmallScreen={isTablet} />
          <Projects isSmallScreen={smallScreen} />
          <Contact isSmallScreen={isMobile} />
          <Footer smallScreen={smallScreen} />
        </>
      )}
    </>
  );
};

export default Inicio;
