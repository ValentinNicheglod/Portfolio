import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Slider = ({deviceType, images, logo, mobile, name, page, setDeviceType, setOpen}) => {
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
      </CarouselItem>
    ));

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        className="carousel-cont"
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
            alt=""
          />
          <h6 className="white display">Galería de {name}</h6>
        </div>
        <div className="bottombar-2 d-flex align-items-center">
          {mobile &&
            <div className="gallery-selector">
              <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={deviceType === "computer"} onClick={() => setDeviceType("computer")}/>
                <label className="btn btn-outline-light" for="btnradio1">
                  Computadora
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked={deviceType === "phone"} onClick={() => setDeviceType("phone")}/>
                <label className="btn btn-outline-light" for="btnradio3">
                  &nbsp;Smartphone&nbsp;
                </label>
              </div>
            </div>
          }
        </div>
        <div className="bottombar-3 p-3">
          <div className="proyect-btn-cont m-0 open-btn-gallery">
            <button className="btn btn-sm btn-danger" onClick={() => setOpen(false)}>
              Salir
            </button>
          </div>
        </div>
        <div className="slider-indicators">
          {
            images && images.map((image, index) => (
              activeIndex === index 
              ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#212529" class="bi bi-circle-fill" viewBox="0 0 16 16" onClick={() => goToIndex(index)}>
                <circle cx="8" cy="8" r="8"/>
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#212529" class="bi bi-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
            ))
          }
        </div>
    </div>
    </>
  );
}

export default Slider;