/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import ChevronRightIcon from '../images/icons/BlueChevronRight.svg';

const Slider = ({
  deviceType, closeGallery, images, index, mobile, open, project, setDeviceType,
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

  /* const changeDevice = (device) => {
    if (device !== deviceType) {
      if (document.querySelector(`#active-${index}`)) {
        document.querySelector(`#active-${index}`).id = 'change-device-animate-out';
      }
      setTimeout(() => {
        setDeviceType(device);
      }, 500);
      setTimeout(() => {
        if (document.querySelector('#change-device-animate-out')) {
          document.querySelector('#change-device-animate-out').id = 'change-device-animate-in';
        }
      }, 1000);
      setTimeout(() => {
        if (document.querySelector('#change-device-animate-in')) {
          document.querySelector('#change-device-animate-in').id = `active-${index}`;
        }
      }, 1500);
    }
  }; */

  const onClose = () => {
    closeGallery();
    setTimeout(() => {
      setActiveIndex(0);
    }, 2000);
  };

  const Slides = images && images.map((image, i) => (
    <CarouselItem
      key={i}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      {project.hasScrollablePrototype
        ? (
          <picture className="image-slider prototype-container" id={activeIndex === i ? `active-${index}` : undefined}>
            {typeof image === 'object' && (
              <div className="scrollable-alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 15L12 19L8 15" stroke="#366EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 9L12 5L16 9" stroke="#366EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Prototipo scrolleable</p>
              </div>
            )}
            <div className="prototype-content-cont">
              <img
                src="https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/ProjectBackground.png"
                alt=""
                className="image-slider project-bg"
              />
              <img
                src="https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/radley/Mockup%20Template.png"
                alt=""
                className="image-slider prototype-window"
              />
              <div className={typeof image === 'object' ? 'prototype-content' : 'prototype-content fixed'}>
                <img
                  src={`https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/${image.path || image}.jpg`}
                  alt=""
                  className="image-slider prototype-window"
                />
              </div>
            </div>
          </picture>
        )
        : (
          <img
            id={activeIndex === i ? `active-${index}` : undefined}
            src={`https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/master/public/projects/mockups/${image.path || image}.jpg`}
            alt=""
            name={typeof image === 'object' ? image.id : undefined}
            className="image-slider"
          />
        )}
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
        key={index}
      >
        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {Slides}
        <CarouselControl cssModule={{ backgroundImage: ChevronRightIcon }} direction="prev" directionText=" " onClickHandler={previous} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    </>
  );
};

export default Slider;
