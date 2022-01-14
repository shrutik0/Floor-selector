import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { CarouselStyle } from "./molecules.style";

const PrevArrow = (onClick) => (
  <div onClick={onClick} className="trigger prev-btn">
    <img
      alt="prev-arrow"
      src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
    />
  </div>
);

const NextArrow = (onClick) => (
  <div onClick={onClick} className="trigger next-btn">
    <img
      alt="next-arrow"
      src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
    />
  </div>
);

function Carousel(props) {
  return (
    <CarouselStyle>
      <ReactCarousel renderArrowNext={NextArrow} renderArrowPrev={PrevArrow}>
        <div className="item">one</div>
        <div className="item">two</div>
        <div className="item">three</div>
      </ReactCarousel>
    </CarouselStyle>
  );
}

export default Carousel;
