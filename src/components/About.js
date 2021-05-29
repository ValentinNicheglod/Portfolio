import React from 'react';
import Slider from 'react-slideview';
import animateScrollTo from 'animated-scroll-to';

const images = [1, 2, 3, 4/* 5 */];
const info = [
  'Me llamo Valentín Nicheglod, vivo en Uruguay, en la ciudad de Paysandú, tengo 20 años y mi vida gira en torno a cuatro pasiones: la arquitectura 👷🏼‍♂️, la aviación ✈️, el diseño 🖊️ y por supuesto la programación 👨🏻‍💻.',
  'Soy desarrollador web full stack con más de diez meses de experiencia programando en JavaScript, también he desarrollado aplicaciones móviles en react native.',
  'Me considero una persona muy atenta a los detalles, y esto me ayuda al momento de pensar y diseñar, disfruto trabajando en equipos proactivos y organizados.',
  'Siempre estoy en busca de expandir mis conocimientos, me encanta aprender y enfrentarme a nuevos desafíos, es algo que considero fundamental para el desarrollo de cualquier persona.',

];

const About = () => (
  <div className="bg-1 row m-0 box responsive-cont">
    <div className="col-md-7 col-sm-6 p-4 box fit-content">
      <div>
        <h1 className="display-3 white title">
          Sobre mi...
        </h1>
      </div>
      <div className="d-flex flex-column justify-content-around h-90">
        <div className="info-cont box">
          {
            info.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))
        }
        </div>
        <div className="cv-btn-cont">
          <a
            className="btn cv-btn"
            href="https://drive.google.com/file/d/1M-Urti3NuO2jC7VJeK6hTXu7wvs__dQ3/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver curriculúm
            <div className="cv-btn-line" />
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-5 col-sm-6 d-flex justify-content-center align-items-center py-3 slider-cont">
      <div className="slider d-flex justify-content-center">
        <Slider
          className="h-100 d-flex justify-content-center"
          speed={5000}
        >
          {
            images.map((image, i) => (
              <div key={i}>
                <img
                  src={`me/${image}.jpeg`}
                  alt=""
                  draggable={false}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
    <button className="btn more-info more-info1" onClick={() => animateScrollTo(window.innerHeight * 2 + 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </button>
    <div className="d-flex justify-content-center W-100 cv-btn-cont-mobile">

      <a
        className="btn w-50 btn-mobile btn-mobile-sec d-flex justify-content-center W-100"
        href="https://drive.google.com/file/d/1M-Urti3NuO2jC7VJeK6hTXu7wvs__dQ3/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        VER CURRíCULUM
      </a>
    </div>
  </div>
);

export default About;
