import { Tooltip } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ChevronIcon from '../images/icons/ChevronRight.svg';
import Slider from './Slider';

const laptop = 'M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z';
const smartphone = 'M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z';
const finished = 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z';
const production = 'M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z';
const gradient = '180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 57.35%, rgba(0, 0, 0, 0.3) 68.54%, rgba(0, 0, 0, 0.8) 90.41%, rgba(0, 0, 0, 0.8) 100%';
const hoverGradient = '180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%';

const actions = [
  {
    label: 'github',
    name: 'GitHub',
    svgPath: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
  },
];

const ProjectCard = ({
  project, smallScreen, openGallery, galleryButtonState,
}) => {
  const Actions = () => (
    <div className="d-flex justify-content-around project-actions">
      {
        project.github
        && (
          <div className="project-btn-cont">
            <a
              className="project-btn btn"
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {!smallScreen && <span className="m-0">GitHub</span>}
            </a>
            {smallScreen && <small className="m-0 mt-1 d-flex justify-content-center">GitHub</small>}
          </div>
        )
      }
      {
        project.gallery
        && (
          <div className="project-btn-cont">
            <button
              className="project-btn btn"
              id={galleryButtonState}
              onClick={() => openGallery(project.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
              </svg>
              {!smallScreen && <span className="m-0">Galería</span>}
            </button>
            {smallScreen && <small className="m-0 mt-1 d-flex justify-content-center">Galería</small>}
          </div>
        )
      }
      {
        project.page
        && (
          <div className="project-btn-cont">
            <a
              className="project-btn btn"
              href={project.page}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              {!smallScreen && <span className="m-0">Abrir</span>}
            </a>
            {smallScreen && <small className="m-0 mt-1 d-flex justify-content-center">Abrir</small>}
          </div>
        )
      }
    </div>
  );

  return (
    <div className="project-card" name={project.name} style={{ backgroundImage: `url(${project.backgroundImage})` }}>
      <div className="gradient">
        <p>{project.description}</p>
        <Actions />
      </div>
      <Tooltip title={project.typeText} placement="bottom">
        <div className="project-type">
          <img width="32" src={project.typeIcon} alt={project.typeText} />
        </div>
      </Tooltip>
      <div className="project-information-container">
        <div className="rounded-square">
          <img src={project.icon} alt="" width="50" />
        </div>
        <div className="project-information">
          <h2>{project.name}</h2>
          <p>{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
