import React from "react";
import { CompassStyle } from "./molecules.style";

function Compass({ angle = 0, right = 0, bottom = 0, zIndex = 1 }) {
  return (
    <CompassStyle
      style={{ transform: `rotateZ(${angle}deg)`, right, bottom, zIndex }}
    >
      <img src={`${process.env.PUBLIC_URL}/icons/compass.png`} alt="compass" />
    </CompassStyle>
  );
}

export default Compass;
