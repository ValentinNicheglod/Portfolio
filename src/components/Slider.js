import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Slider = ({images}) => {
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

  const slides = images && images.map((path, i) => {
    return (
      <CarouselItem
        key={i}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={`projects/mockups/${path}.jpg`} alt="" height="100%" className="image-slider"/>
        {/* <img src={path} alt="" height="100%" className="image-slider"/> */}
      </CarouselItem>
    );
  });

  return (
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
  );
}

export default Slider;