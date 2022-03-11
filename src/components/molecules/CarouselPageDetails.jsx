import React from "react";
import { CarouselItemDetailsStyle } from "./molecules.style";

function CarouselPageDetails({
  Header,
  highlights = [],
  features = [],
  style,
  buttons = [],
  tnc = false,
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
            <div className="left">{feature.key.toString().toUpperCase()}</div>
            <div className="right">
              {feature.key === "Total Cost*"
                ? feature.value
                : feature.value.toString().toUpperCase()}
            </div>
          </div>
        ))}
      </div>
      {buttons.length > 0 && (
        <div className="btns">
          {buttons.map((button) => (
            <div className={"btn " + button.className} onClick={button.onClick}>
              {button.text}
            </div>
          ))}
        </div>
      )}
      {tnc && <div className="tnc">{tnc}</div>}
    </CarouselItemDetailsStyle>
  );
}

export default CarouselPageDetails;
