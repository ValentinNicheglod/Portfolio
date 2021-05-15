import React from 'react';
import Slider from "react-slideview";

const images = [1, 2, 3, 4, 5];
const info = [
    'Me llamo Valentín Nicheglod, vivo en Uruguay, en la ciudad de Paysandú, tengo 20 años y mi vida gira en torno a cuatro pasiones: la arquitectura 👷🏼‍♂️, la aviación ✈️, el diseño 🖊️ y por supuesto la programación 👨🏻‍💻.',
    'Soy desarrollador web full stack con más de diez meses de experiencia programando en JavaScript, también he desarrollado aplicaciones moviles en react native, si tengo que elegir entre front end y back end, prefiero el front end, pero esto no quita que disfrute trabajar en back end.',
    'Siempre estoy en busca de expandir mis conocimientos, me encanta aprender y afrontarme a nuevos desafios, es algo que considero fundamental para el desarrollo de cualquier persona.',
    'Me considero una persona muy atenta a los detalles, y esto me ayuda al momento de pensar y diseñar, disfruto trabajando en equipos proactivos y organizados.'
];

const About = () => {
    return (
        <div className="bg-1 row m-0 box responsive-cont">
            <div className="col-md-7 col-sm-6 p-4 box fit-content">
                <div>
                    <h1 className="display-3 white title">
                        Sobre mi...
                    </h1>
                </div>
                <div className="info-cont box">
                    {
                        info.map(paragraph => (
                            <p>
                                {paragraph}
                            </p>
                        ))
                    }                    
                </div>
                <div className="cv-btn-cont">
                    <a 
                        className="btn cv-btn" 
                        href="https://drive.google.com/file/d/1aQuwdbBWLX1Ju6ghsN5kB6Pwtec2Dc2c/view?usp=sharing" 
                        target="_blank" 
                        rel="noreferrer noopener"
                    >
                            Ver curriculúm
                    </a>
                    <div className="cv-btn-line"/>
                </div>
            </div>
            <div className="col-md-5 col-sm-6 d-flex justify-content-center align-items-center pb-5 slider-cont">
                <div className="slider d-flex justify-content-center">
                    <Slider 
                        className="h-100 d-flex justify-content-center" 
                        speed={5000}
                    >
                        {
                            images.map(image => (
                                <div>
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
            <div className="d-flex justify-content-center W-100 cv-btn-cont-mobile">
                <a 
                    className="btn contact-btn cv-btn-mobile d-flex justify-content-center W-100"
                    href="https://drive.google.com/file/d/1aQuwdbBWLX1Ju6ghsN5kB6Pwtec2Dc2c/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    VER CURRíCULUM
                </a>
            </div>
        </div>
    )
};

export default About;
