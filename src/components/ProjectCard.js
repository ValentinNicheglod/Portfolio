import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@material-ui/core';

const ProjectCard = ({
  project, openGallery, galleryButtonState,
}) => {
  const { t } = useTranslation();

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
              <span className="m-0">GitHub</span>
            </a>
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
              <span className="m-0">{t('gallery')}</span>
            </button>
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
              <span className="m-0">{t('open')}</span>
            </a>
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
