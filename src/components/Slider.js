import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Slider = ({deviceType, images, logo, mobile, name, page, setDeviceType}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = images && images.map((path, i) => (
      <CarouselItem
        key={i}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={`projects/mockups/${path}.jpg`} alt=""className="image-slider"/>
        {/* <img src={path} alt="" height="100%" className="image-slider"/> */}
      </CarouselItem>
    ));

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        className="h-100"
        interval={false}
        next={next}
        previous={previous}
        slide={true}
      >
        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={previous}/>
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
      <div className="carousel-bottombar bg-3">
        <div className="bottombar-1 col">
          <img 
            src={`projects/${logo}`} 
            //src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png"
            alt=""
          />
          <h6 className="white display">Galería de {name}</h6>
        </div>
        <div className="bottombar-2 d-flex align-items-center">
          {mobile &&
            <div className="gallery-selector">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={deviceType === "computer"} onClick={() => setDeviceType("computer")}/>
                <label className="btn btn-outline-light" for="btnradio1">Computadora</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked={deviceType === "phone"} onClick={() => setDeviceType("phone")}/>
                <label className="btn btn-outline-light" for="btnradio3">Smartphone</label>
              </div>
            </div>
          }
        </div>
        <div className="bottombar-3 p-3">
          <div className="proyect-btn-cont m-0 open-btn-gallery">
            <a 
                className="proyect-btn proyect-btn btn m-0" 
                href={page} 
                target="_blank" 
                rel="noreferrer noopener"
                //title="Abrir proyecto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                <p className="m-0 gallery-p">Abrir proyecto</p>
            </a>
          </div>
        </div>
        <div className="slider-indicators">
          {
            images && images.map((image, index) => (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill={activeIndex === index ? '#212529' : 'gray'} class="bi bi-circle-fill" viewBox="0 0 16 16" onClick={() => goToIndex(index)}>
                <circle cx="8" cy="8" r="8"/>
              </svg>
            ))
            /* <p className="white">
            {activeIndex + 1}/{images.length}
            </p> */
          }
        </div>
    </div>
    </>
  );
}

export default Slider;