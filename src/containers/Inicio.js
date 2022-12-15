import React, { useState, useEffect, useRef } from 'react';

import '../App.css';

// Components

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

// Logos

import SmallLogo from '../images/logos/Small.svg';

function getWindowWidth() {
  return window.innerWidth;
}

const Inicio = () => {
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [layout, setLayout] = useState({
    isDesktop: window.innerWidth > 991,
    isTablet: window.innerWidth < 991,
    isSmallScreen: window.innerWidth < 770,
    isMobile: window.innerWidth < 600,
  });

  const firstSection = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    setLayout({
      isDesktop: window.innerWidth > 991,
      isTablet: window.innerWidth < 991,
      isSmallScreen: window.innerWidth < 770,
      isMobile: window.innerWidth < 600,
    });
  }, [windowWidth]);

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

  return (
    <>
      {loadingAnimation && (
        <>
          {pageLoaded && <img className="loading-logo" src={SmallLogo} alt="" />}
          <div className={pageLoaded ? 'loading-screen loading-animation' : 'loading-screen'} />
        </>
      )}
      <Greeting ref={firstSection} smallScreen={layout.isSmallScreen} />
      {!loadingAnimation && (
        <>
          <About layout={layout} />
          <Skills layout={layout} />
          <Projects />
          <Contact layout={layout} />
          <Footer layout={layout} />
        </>
      )}
    </>
  );
};

export default Inicio;
