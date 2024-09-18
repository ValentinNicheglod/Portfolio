import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserCard from './UserCard';

// Emojis

import ArchitectureIcon from '../images/emojis/Architecture.png';
import AviationIcon from '../images/emojis/Aeroplane.png';
import DesignIcon from '../images/emojis/Design.png';
import PhotographyIcon from '../images/emojis/Camera.png';
import TechnologyIcon from '../images/emojis/Computer.png';
import TravelIcon from '../images/emojis/Globe.png';

const About = ({ layout }) => {
  const { t } = useTranslation();

  const interests = [
    {
      label: t('architecture'),
      image: ArchitectureIcon,
    },
    {
      label: t('aviation'),
      image: AviationIcon,
    },
    {
      label: t('design'),
      image: DesignIcon,
    },
    {
      label: t('photography'),
      image: PhotographyIcon,
    },
    {
      label: t('technology'),
      image: TechnologyIcon,
    },
    {
      label: t('travel'),
      image: TravelIcon,
    },
  ];

  const personalInformation = [
    t('about-me-content-1'),
    t('about-me-content-2'),
    t('about-me-content-3'),
  ];

  const [isInformationExpanded, setIsInformationExpanded] = useState(false);

  const handleInformationState = () => {
    setIsInformationExpanded(!isInformationExpanded);
  };

  const Interests = () => (
    <div>
      <h3 className="mb-16"><b>{t('interests')}</b></h3>
      <div className="interest-container">
        {
          interests.map((interest, index) => (
            <div key={index}>
              <div className="interest mb-8">
                <img src={interest.image} alt="" />
              </div>
              <div className="center-text">
                <small>
                  {interest.label}
                </small>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );

  const AboutMe = () => (
    layout.isSmallScreen
      ? (
        <div className="mb-32">
          <p className="mb-16">{personalInformation[0]}</p>
          {isInformationExpanded && <p>{personalInformation[1]}</p>}
          {isInformationExpanded && <p className="mt-16">{personalInformation[2]}</p>}
          <button className="view-more-button" onClick={handleInformationState}>
            {isInformationExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      )
      : (personalInformation.map((paragraph, index) => (
        <p key={index} className="mb-16">{paragraph}</p>
      )))
  );

  return (
    <section className="m-0 about">
      <div className="about-container">
        <div className="user-card-cont">
          <UserCard />
        </div>
        <div className="user-information">
          <div className="position-relative mb-32">
            <h1 className="title mb-32">{t('about-me')}</h1>
            <AboutMe />
          </div>
          {layout.isDesktop && <Interests />}
        </div>
      </div>
      {layout.isTablet && (
        <div className="interests-tablet">
          <Interests className="interests-tablet" />
        </div>
      )}
    </section>
  );
};

export default About;
