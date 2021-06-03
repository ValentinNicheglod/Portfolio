import { Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import Slider from './Slider';

const laptop = 'M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z';
const smartphone = 'M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z';
const finished = 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z';
const production = 'M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z';

const ProjectCard = ({
  name, img, tech, index,
  state, description, codeLines, date,
  gallery, mobileGallery, github, page, smallScreen, type,
}) => {
  const [open, setOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('computer');
  const [side, setSide] = useState('front');
  const [animation, setAnimation] = useState(true);
  const [animation1, setAnimation1] = useState(false);

  const openGallery = () => {
    setOpen(true);
    setTimeout(() => {
      document.body.setAttribute('id', 'no-overflow');
    }, 1500);
  };

  const closeGallery = () => {
    setAnimation(false);
    document.body.removeAttribute('id');
    setTimeout(() => {
      setDeviceType('computer');
      setOpen(false);
      setAnimation(true);
    }, 1500);
  };

  const moreInfoOpen = () => {
    setAnimation1(true);
    setTimeout(() => {
      setSide('back');
      setAnimation1(false);
    }, 350);
    setTimeout(() => {
      setAnimation1(false);
    }, 700);
  };

  const moreInfoClose = () => {
    setAnimation1(true);
    setTimeout(() => {
      setSide('front');
      setAnimation1(false);
    }, 350);
    setTimeout(() => {
      setAnimation1(false);
    }, 700);
  };

  return (
    <div
      className="card bg-3 p-3 proyect-card"
      id={animation1 ? 'card-front' : 'card-back'}
    >
      {side === 'front'
        ? (
          <div>
            <div className="d-flex justify-content-center row proyect-card-1">
              <div className="row">
                <div className="d-flex justify-content-center col-md-6 col-sm-6 white p-info">
                  <p>
                    {
                type === 'Web'
                  ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-laptop"
                      viewBox="0 0 16 16"
                    >
                      <path d={laptop} />
                    </svg>
                  )
                  : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d={smartphone} />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  )
              }
              &nbsp;&nbsp;
                    {type}
                  </p>
                </div>
                <div className="d-flex justify-content-center col-md-6 col-sm-6 white p-info">
                  <p>
                    {
                  state === 'Finalizado'
                    ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d={finished} />
                      </svg>
                    )
                    : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-braces"
                        viewBox="0 0 16 16"
                      >
                        <path d={production} />
                      </svg>
                    )
              }
              &nbsp;&nbsp;
                    {state}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center image">
                <img
                  src={`https://valentinnicheglod.github.io/Portfolio/projects/${img}`}
                  alt=""
                  draggable={false}
                />
              </div>
            </div>

            {!smallScreen && <hr className="proyect-card-hr" />}

            <div className="row h-30">
              <div>
                <h6 className="display-6 d-flex justify-content-center align-items-start white">
                  {name}
                </h6>
                {smallScreen && <hr className="hr-project" />}
              </div>
              <div className="d-flex justify-content-around">
                {
                  github
                      && (
                      <div className="proyect-btn-cont">
                        <a
                          className="proyect-btn btn"
                          href={github}
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
                  gallery
                      && (
                      <div className="proyect-btn-cont">
                        <button
                          className="proyect-btn btn"
                          onClick={openGallery}
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
                  page
                      && (
                      <div className="proyect-btn-cont">
                        <a
                          className="proyect-btn btn"
                          href={page}
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
            </div>
            <Tooltip title="Información adicional">
              <div
                className="floating-button"
                onClick={moreInfoOpen}
                role="button"
                tabIndex={0}
                aria-hidden
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </Tooltip>
            {open
              && (
              <div id={animation ? 'modal' : 'modal-hidden'}>
                <Slider
                  deviceType={deviceType}
                  images={deviceType === 'phone' ? mobileGallery : gallery}
                  mobile={mobileGallery}
                  name={name}
                  index={index}
                  key={index}
                  logo={img}
                  open={open}
                  page={page}
                  smallScreen={smallScreen}
                  closeGallery={closeGallery}
                  setDeviceType={setDeviceType}
                />
              </div>
              )}
          </div>
        )
        : (
          <div className="wrapper">
            <div className="grid-logo">
              <img src={`https://valentinnicheglod.github.io/Portfolio/projects/${img}`} alt="logo" />
            </div>
            {/* <div className="grid-name">
              <h2>
                {name}
              </h2>
            </div> */}
            <div className="grid-desc">
              <div className="desc-circle" />
              <div className="desc-circle-1" />
              <div className="desc-circle-2" />
              <div style={{ zIndex: '1000' }}>
                <div className="tag">
                  {name}
                </div>
                <h2>
                  Descripción
                </h2>
              </div>
              <p>
                {description}
              </p>
            </div>
            <div className="grid-date grid-date-1">
              <div className="tag">
                Inicio
              </div>
              <p>
                {date.start[0]}
              </p>
              <h6 className="grid-date-year">
                {date.start[1]}
              </h6>
            </div>
            <div className="grid-date grid-date-2">
              <div className="tag">
                Final
              </div>
              <p>
                {date.end[0]}
              </p>
              <h6 className="grid-date-year">
                {date.end[1]}
              </h6>
            </div>
            <div className="grid-tech">
              <div>
                <div className="tag">
                  Principales
                </div>
                <h3>
                  Tecnologías
                </h3>
              </div>
              <div className="w-100">
                {tech.map((tech, i) => (
                  <Tooltip title={tech[1]}>
                    <div className="tech-icon row">
                      <img key={i} src={tech[0]} alt="" width="55" />
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="grid-code-lines row">
              <div className="lines-circle" />
              <div className="lines-circle-1" />
              <div className="lines-1">
                <div className="tag">
                  Líneas de
                </div>
                <h6>código</h6>
              </div>
              <div className="lines-2">
                <p>
                  {codeLines}
                </p>
              </div>
            </div>
            <div className="grid-type">
              <div className="state-line" />
              <div className="tag">
                Tipo
              </div>
              <p>
                {type}
              </p>
              {
                type === 'Aplicación'
                  ? <img src="https://img.icons8.com/fluent/96/000000/iphone.png" alt="" />
                  : <img src="https://img.icons8.com/fluent/96/000000/monitor.png" alt="" />
              }
            </div>
            <div className="grid-state">
              <div className="state-line" />
              <div className="tag">
                Estado
              </div>
              <p>
                {state}
              </p>
              <img src="https://img.icons8.com/fluent/96/000000/checkmark.png" alt="" />
            </div>
            <Tooltip title="Volver">
              <div
                className="floating-button"
                onClick={moreInfoClose}
                role="button"
                tabIndex={0}
                aria-hidden
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
            </Tooltip>
          </div>
        )}
    </div>
  );
};

export default ProjectCard;
