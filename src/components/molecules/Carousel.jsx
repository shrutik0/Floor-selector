import React, { useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { CarouselStyle } from "./molecules.style";

function Carousel({ children, titleList = [], onChange, currentItemIndex }) {
  const PrevArrow = (onClick, hasPrev) => (
    <div
      onClick={onClick}
      className="carousel-trigger prev-btn disable-text-selection"
      style={{
        // this style requires to prevent tippy to show up while sliding to next carousel
        opacity: hasPrev ? "1" : "0",
        cursor: hasPrev ? "pointer" : "default",
      }}
    >
      <img
        alt="prev-arrow"
        src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
      />
      {titleList.length > 0 && (
        <div className="btn-label">
          {currentItemIndex > 0 && titleList[currentItemIndex - 1]}
        </div>
      )}
    </div>
  );

  const NextArrow = (onClick, hasNext) => {
    return (
      <div
        onClick={onClick}
        className="carousel-trigger next-btn disable-text-selection"
        style={{
          // this style requires to prevent tippy to show up while sliding to next carousel
          opacity: hasNext ? "1" : "0",
          cursor: hasNext ? "pointer" : "default",
        }}
      >
        {hasNext && titleList.length > 0 && (
          <div className="btn-label">
            {currentItemIndex < titleList.length - 1 &&
              titleList[currentItemIndex + 1]}
          </div>
        )}
        <img
          alt="next-arrow"
          src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
        />
      </div>
    );
  };
  return (
    <CarouselStyle>
      <ReactCarousel
        renderArrowNext={NextArrow}
        renderArrowPrev={PrevArrow}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={currentItemIndex}
        onChange={onChange}
      >
        {children}
      </ReactCarousel>
    </CarouselStyle>
  );
}

export default Carousel;
