/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Slider = ({
  deviceType, closeGallery, images, index, logo, mobile, name, open, setDeviceType, smallScreen,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const changeDevice = (device) => {
    if (document.querySelector(`#active-${index}`)) {
      document.querySelector(`#active-${index}`).id = 'change-device-animate-out';
    }
    setTimeout(() => {
      setDeviceType(device);
      if (document.querySelector('#change-device-animate-out')) {
        document.querySelector('#change-device-animate-out').id = 'change-device-animate-in';
      }
    }, 500);
    setTimeout(() => {
      if (document.querySelector('#change-device-animate-in')) {
        document.querySelector('#change-device-animate-in').id = `active-${index}`;
      }
    }, 1000);
  };

  const onClose = () => {
    closeGallery();
    setTimeout(() => {
      goToIndex(0);
    }, 2000);
  };

  const slides = images && images.map((path, i) => (
    <CarouselItem
      key={i}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img
        id={activeIndex === i ? `active-${index}` : null}
        src={`https://valentinnicheglod.github.io/Portfolio/projects/mockups/${path}.jpg`}
        alt=""
        className="image-slider"
        style={{ transform: deviceType === 'phone' && smallScreen ? 'scale(1.5)' : null }}
      />
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
        // slide={false}
        key={index}
      >
        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
      {/* <div
            id="carouselExampleControls"
            className="carousel slide h-100"
            data-ride="carousel"
            data-interval={false}
          >
        <div className="carousel-inner">
          {
          images && images.map((path, i) => (
            <div
              className={i === activeIndex ? 'carousel-item active' : 'carousel-item'}
              key={i}
            >
              <img
                className="d-block h-100"
                src={`https://valentinnicheglod.github.io/Portfolio/projects/mockups/${path}.jpg`}
                alt=""
                style={{ transform: deviceType === 'phone' && smallScreen ? 'scale(1.5)' : null }}
              />
            </div>
          ))
        }
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"
          aria-hidden="true"
        />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div> */}
      <div id={open ? '' : 'hidden'} className="carousel-bottombar bg-3">
        <div className="bottombar-1 col">
          <img
            src={`projects/${logo}`}
            alt=""
          />
          <h6 className="white display">
            Galería de&nbsp;
            {name}
          </h6>
        </div>
        <div className="bottombar-2 d-flex align-items-center">
          {mobile
            && (
            <div className="gallery-selector">
              {/* <div className="btn-group btn-group-sm"
              role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio"
                id="btnradio1" autoComplete="off"
                checked={deviceType === 'computer'} onClick={() => changeDevice('computer')} />
                <label className="btn btn-outline-light" htmlFor="btnradio1">
                  Computadora
                </label>
                <input type="radio" className="btn-check"
                name="btnradio" id="btnradio3" autoComplete="off"
                checked={deviceType === 'phone'} onClick={() => changeDevice('phone')} />
                <label className="btn btn-outline-light" htmlFor="btnradio3">
                  &nbsp;Smartphone&nbsp;
                </label>
              </div> */}
              <button
                className="w-50 btn-sm btn btn-outline-light btn1"
                id={deviceType === 'computer' ? 'checked' : null}
                onClick={() => changeDevice('computer')}
              >
                Computadora
              </button>
              <button
                className="w-50 btn-sm btn btn-outline-light btn2"
                id={deviceType === 'phone' ? 'checked' : null}
                onClick={() => changeDevice('phone')}
              >
                &nbsp;Smartphone&nbsp;
              </button>
            </div>
            )}
        </div>
        <div className="bottombar-3 p-3">
          <div className="proyect-btn-cont m-0 open-btn-gallery">
            <button className="btn btn-sm btn-danger" onClick={onClose}>
              Salir
            </button>
          </div>
        </div>
        {/* {images && images.map((img) => (
          <img className="preload" src={`https://valentinnicheglod.github.io/Portfolio/projects/mockups/${img}.jpg`} alt="" />
        ))} */}
        {/* <div className="slider-indicators">
          {
            images && images.map((image, i) => (
              activeIndex === i
                ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#212529" className="bi bi-circle-fill" viewBox="0 0 16 16" onClick={() => goToIndex(i)}>
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                )
                : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#212529" className="bi bi-circle" viewBox="0 0 16 16" onClick={() => goToIndex(i)}>
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                  </svg>
                )
            ))
          }
        </div> */}
      </div>
    </>
  );
};

export default Slider;
