import React from 'react';
import Slider from "react-slideview";

const images = [1, 2, 3, 4, 5];
const info = [
    'Me llamo Valentín Nicheglod, vivo en Uruguay, en la ciudad de Paysandú, tengo 20 años y mi vida gira en torno a cuatro pasiones: la arquitectura 👷🏼‍♂️, la aviación ✈️, el diseño 🖊️ y por supuesto la programación 👨🏻‍💻.',
    'Soy desarrollador web full stack jr con más de seis meses de experiencia programando en JavaScript, también he desarrollado aplicaciones moviles en react native, si tengo que elegir entre front end y back end, prefiero el front end, pero esto no quita que disfrute trabajar en back end.',
    'Siempre estoy en busca de expandir mis conocimientos, me encanta aprender y afrontarme a nuevos desafios, es algo que considero fundamental para el desarrollo de cualquier persona.',
    'Me considero una persona muy atenta a los detalles, y esto me ayuda al momento de pensar y diseñar, disfruto trabajando en equipos proactivos y organizados.'
];

const About = () => {
    return (
        <div className="bg-1 row m-0 box responsive-cont">
            <div className="col-md-7 p-4 box">
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
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center pb-5 slider-cont">
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
        </div>
    )
};

export default About;
