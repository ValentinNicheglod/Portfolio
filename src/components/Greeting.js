import React from 'react';
import { useTranslation } from 'react-i18next';

// Emojis

import WavingHandEmoji from '../images/emojis/WavingHand.png';
import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';
import DeveloperEmoji from '../images/emojis/Developer.png';
import SmallLogo from '../images/logos/Small.svg';

const Greeting = () => {
  const { t } = useTranslation();

  const InformationCard = () => (
    <div className="information-container">
      <div className="name-card mb-32">
        <img src={WavingHandEmoji} alt="" />
        <div>
          <p>{t('hello')}</p>
          <h1 className="title">Valentín</h1>
        </div>
      </div>
      <div className="ocupation-card mb-16">
        <img src={DeveloperEmoji} alt="" />
        <h4>{t('developer')}</h4>
      </div>
      <div className="ocupation-card">
        <img src={UXUIDesignerEmoji} alt="" />
        <h4>{t('designer')}</h4>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-height m-0 background-image">
        <div className="logo-container">
          <img src={SmallLogo} alt="" />
        </div>
        <InformationCard />
      </div>
      <div className="line" />
    </>

  );
};

export default Greeting;
