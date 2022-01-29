import React from "react";
import { TowerPageDetailsStyle } from "./molecules.style";

function CarouselPageDetails({ title, highlights = [], features = [] }) {
  return (
    <TowerPageDetailsStyle>
      <div className="header">
        <div className="icon-wrapper center">
          <img src={`${process.env.PUBLIC_URL}/icons/building.svg`} />
        </div>
        <div>{title}</div>
      </div>
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
