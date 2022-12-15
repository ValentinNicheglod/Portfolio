import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tooltip } from '@material-ui/core';
import Logo from '../images/logos/Small.svg';

const Footer = ({ layout }) => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <img
          src={Logo}
          alt=""
          width="150"
          height="150"
          draggable={false}
        />
        <p>Valentín Nicheglod</p>
      </div>
      {layout.isDesktop && (
        <Tooltip title={t('go-up')} placement="left">
          <button className="btn go-up-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
          </button>
        </Tooltip>
      )}
    </footer>
  );
};

export default Footer;
