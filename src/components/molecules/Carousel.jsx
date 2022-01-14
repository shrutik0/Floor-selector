import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { CarouselStyle } from "./molecules.style";

const PrevArrow = (onClick, hasPrev) =>
  hasPrev && (
    <div
      onClick={onClick}
      className="carousel-trigger prev-btn disable-text-selection"
    >
      <img
        alt="prev-arrow"
        src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
      />
    </div>
  );

const NextArrow = (onClick, hasNext) =>
  hasNext && (
    <div
      onClick={onClick}
      className="carousel-trigger next-btn disable-text-selection"
    >
      <img
        alt="next-arrow"
        src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
      />
    </div>
  );

function Carousel({ selectedItem = 0, children, onChange }) {
  return (
    <CarouselStyle>
      <ReactCarousel
        renderArrowNext={NextArrow}
        renderArrowPrev={PrevArrow}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={selectedItem}
        onChange={onChange}
      >
        {children}
      </ReactCarousel>
    </CarouselStyle>
  );
}

export default Carousel;
