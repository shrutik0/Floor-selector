import React, { useEffect, useState } from "react";
import { MouseInstructionsStyle } from "./atoms.style";

function MouseInstructions(props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3800);
  });
  return (
    <MouseInstructionsStyle>
      {show && (
        <div className="instruction">Click on Tower of your interest</div>
      )}
    </MouseInstructionsStyle>
  );
}

export default MouseInstructions;
