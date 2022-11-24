import React, { useState } from 'react';
import UserCard from './UserCard';

// Emojis

import ArchitectureIcon from '../images/emojis/Architecture.png';
import AviationIcon from '../images/emojis/Aeroplane.png';
import DesignIcon from '../images/emojis/Design.png';
import PhotographyIcon from '../images/emojis/Camera.png';
import TechnologyIcon from '../images/emojis/Computer.png';
import TravelIcon from '../images/emojis/Globe.png';

const interests = [
  {
    label: 'Arquitectura',
    image: ArchitectureIcon,
  },
  {
    label: 'Aviación',
    image: AviationIcon,
  },
  {
    label: 'Diseño',
    image: DesignIcon,
  },
  {
    label: 'Fotografía',
    image: PhotographyIcon,
  },
  {
    label: 'Tecnología',
    image: TechnologyIcon,
  },
  {
    label: 'Viajes',
    image: TravelIcon,
  },
];
const personalInformation = [
  'Desarrollador web fullstack con 2 años de experiencia trabajando en Javascript, HTML y CSS, cuento con una fuerte orientación hacia el frontend, y disfruto mucho diseñando y maquetando paginas webs o aplicaciones.',
  'Con el fin de complementar mis habilidades como frontend, he estudiado diseño UX/UI, actualmente continuo diseñando y aprendiendo sobre ello.',
  'Me considero una persona creativa y muy atenta a los detalles, esto me ayuda al momento de pensar y diseñar.',
];

const About = ({ isSmallScreen }) => {
  const [isInformationExpanded, setIsInformationExpanded] = useState(false);

  const handleInformationState = () => {
    setIsInformationExpanded(!isInformationExpanded);
  };

  const Interests = () => (
    <div>
      <h3 className="mb-16"><b>Mis Intereses</b></h3>
      <div className="interest-container">
        {
          interests.map((interest, index) => (
            <div key={index}>
              <div className="interest mb-8">
                <img src={interest.image} alt="" />
              </div>
              <small>
                <center>{interest.label}</center>
              </small>
            </div>
          ))
        }
      </div>
    </div>
  );

  return (
    <section className="m-0 about">
      <div className="about-container">
        <div className="user-card-cont">
          <UserCard />
        </div>
        <div className="user-information">
          <div className="position-relative">
            <h1 className="title mb-32">Sobre mi</h1>
            {isSmallScreen
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
              : (personalInformation.map((paragraph) => (
                <p className="mb-16">{paragraph}</p>
              )))}
          </div>
          <div className="interests-desktop">
            <Interests />
          </div>
        </div>
      </div>
      <div className="interests-tablet">
        <Interests className="interests-tablet" />
      </div>
    </section>
  );
};

export default About;
