import React from "react";
import { SliderStyle } from "./molecules.style";

function Slider(props) {
  const childs = ["one", "two", "three", "four"];
  return (
    <SliderStyle>
      <div>Next</div>
      <div>prev</div>
      {childs.map((child) => (
        <div>{child}</div>
      ))}
    </SliderStyle>
  );
}

export default Slider;
