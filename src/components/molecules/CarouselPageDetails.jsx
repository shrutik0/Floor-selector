import React from "react";
import { TowerPageDetailsStyle } from "./molecules.style";

function CarouselPageDetails({ Header, highlights = [], features = [] }) {
  return (
    <TowerPageDetailsStyle>
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
    </TowerPageDetailsStyle>
  );
}

export default CarouselPageDetails;
