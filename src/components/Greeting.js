import React from 'react';

// Emojis

import WavingHandEmoji from '../images/emojis/WavingHand.png';
import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';
import DeveloperEmoji from '../images/emojis/Developer.png';
import SmallLogo from '../images/logos/Small.svg';

const Greeting = () => (
  <div className="max-height m-0 background-image">
    <div className="blur" />
    <div className="wave" />
    <div className="logo-container">
      <img src={SmallLogo} alt="" />
    </div>
    <div className="information-container">
      <div className="name-card mb-32">
        <img src={WavingHandEmoji} alt="" />
        <div>
          <p>Hola, Soy</p>
          <h1 className="title">Valentín</h1>
        </div>
      </div>
      <div className="ocupation-card mb-16">
        <img src={DeveloperEmoji} alt="" />
        <h4>Desarrollador Web</h4>
      </div>
      <div className="ocupation-card">
        <img src={UXUIDesignerEmoji} alt="" />
        <h4>Diseñador UX/UI</h4>
      </div>
    </div>
  </div>
);

export default Greeting;
