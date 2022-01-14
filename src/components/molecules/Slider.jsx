import React, { useState } from "react";
import { SliderStyle } from "./molecules.style";

function Slider(props) {
  const childs = ["one", "two", "three", "four"];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentItemIndex > 0) setCurrentItemIndex((old) => old - 1);
  };

  const handleNextClick = () => {
    if (currentItemIndex < childs.length - 1)
      setCurrentItemIndex((old) => old + 1);
  };

  return (
    <SliderStyle>
      <div className="btn prev" onClick={handlePrevClick}>
        Prev
      </div>
      <div className="btn next" onClick={handleNextClick}>
        Next
      </div>
      {childs.map((child, index) => (
        <div
          className={
            index === currentItemIndex ? "body visible" : "body outside"
          }
        >
          {child}
        </div>
      ))}
    </SliderStyle>
  );
}

export default Slider;
