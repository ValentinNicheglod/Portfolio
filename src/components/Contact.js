import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@material-ui/core';

// Socials

import Behance from '../images/social/Behance.png';
import Dribble from '../images/social/Dribble.png';
import GitHub from '../images/social/GitHub.png';
import Linkedin from '../images/social/Linkedin.png';

const contactLinks = [
  {
    title: 'Behance',
    href: 'http://www.behance.net/valentin_nicheglod',
    image: Behance,
  },
  {
    title: 'Dribble',
    href: 'https://dribbble.com/valentin_nicheglod',
    image: Dribble,
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

const Contact = ({ layout }) => {
  const { t } = useTranslation();

  const SocialLinks = () => (
    <div className="social-cont d-flex justify-content-around">
      {
        contactLinks.map((link, i) => (
          <Tooltip title={link.title} placement="bottom" key={i}>
            <a
              href={link.href}
              className="social-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={link.image} alt={`${link.title} icon`} />
            </a>
          </Tooltip>
        ))
      }
    </div>
  );

  const ContactButton = () => (
    <a
      href="mailto:nicheglod69@gmail.com"
      className="button"
    >
      {t('send-email')}
    </a>
  );

  return (
    <div className="m-0 contact">
      <div className="d-flex justify-content-center row">
        <h1 className="title white d-flex justify-content-center">
          <center>{layout.isMobile ? t('contact') : t('keep-in-touch')}</center>
        </h1>
        <SocialLinks />
        {layout.isMobile
          ? (
            <center>
              <ContactButton />
            </center>
          ) : (
            <div className="contact-card">
              <h2>
                <center>{t('contact-me')}</center>
              </h2>
              <p className="mb-48">
                {t('contact-me-sub')}
              </p>
              <ContactButton />
            </div>
          )}
      </div>
    </div>
  );
};

export default Contact;
