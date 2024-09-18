import React from 'react';
import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ProfilePicture from '../images/ProfilePicture.jpg';
import LocationPin from '../images/icons/Location.svg';

import UruguayFlag from '../images/flags/uruguay.png';
import ArgentinaFlag from '../images/flags/argentina.png';

// Icons

import Behance from '../images/social/Behance.png';
import Dribbble from '../images/social/Dribble.png';
import GitHub from '../images/social/GitHub.png';
import Linkedin from '../images/social/Linkedin.png';

const contactLinks = [
  {
    title: 'Behance',
    href: 'http://www.behance.net/valentin_nicheglod',
    image: Behance,
  },
  {
    title: 'Dribbble',
    href: 'https://dribbble.com/valentin_nicheglod',
    image: Dribbble,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/ValentinNicheglod',
    image: GitHub,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/valentin-nicheglod/',
    image: Linkedin,
  },
];

const UserCard = () => {
  const { t } = useTranslation();
  return (
    <div className="user-card">
      <img src={ProfilePicture} className="profile-photo mb-32" alt="" />
      <div className="mb-16 center row">
        <h3 className="user-name mb-8">Valentín Nicheglod</h3>
        <small className="user-ocupation">{t('role')}</small>
      </div>
      <div className="location-container mb-32">
        <div className="user-location mb-8">
          <img src={LocationPin} width="24" height="24" alt="" />
          <small>
            <b className="white">Buenos Aires, Argentina</b>
          </small>
          <img src={ArgentinaFlag} width="16" height="16" alt="" />
        </div>
        <div className="user-location">
          <img src={LocationPin} width="24" height="24" alt="" />
          <small>
            <b className="white">Paysandú, Uruguay</b>
          </small>
          <img src={UruguayFlag} width="16" height="16" alt="" />
        </div>
      </div>
      <div className="user-links">
        {
          contactLinks.map((link, i) => (
            <Tooltip title={link.title} placement="bottom" key={i}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={link.image} alt={`${link.title} icon`} />
              </a>
            </Tooltip>
          ))
        }
      </div>
    </div>
  );
};

export default UserCard;
