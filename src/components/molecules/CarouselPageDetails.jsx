import React from "react";
import { CarouselItemDetailsStyle } from "./molecules.style";

function CarouselPageDetails({
  Header,
  highlights = [],
  features = [],
  style,
}) {
  return (
    <CarouselItemDetailsStyle style={style}>
      <div className="header">{Header}</div>
      <div className="highlights">
        {highlights.map((highlight, index) => (
          <div key={index}>{highlight}</div>
        ))}
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="left">{feature.key}</div>
            <div className="right">{feature.value}</div>
          </div>
        ))}
      </div>
    </CarouselItemDetailsStyle>
  );
}

export default CarouselPageDetails;
