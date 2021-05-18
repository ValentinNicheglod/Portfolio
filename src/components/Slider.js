import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Slider = ({images, logo, name, page, smallScreen}) => {
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
            width="40px"
            height="40px"
          />
          <h6 className="white">Galería de {name}</h6>
        </div>
        <div className="bottombar-2">
          <p className="white">
            {activeIndex + 1}/{images.length}
          </p>
          
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
                                    {!smallScreen && <p className="m-0 gallery-p">Abrir proyecto</p>}
                                </a>
                                {smallScreen && <small className="m-0 mt-1 d-flex justify-content-center">Abrir</small>}
                            </div>
        </div>
    </div>
    </>
  );
}

export default Slider;