import React from "react";
import { RotateInstructionStyle } from "./atoms.style";

function RotateInstruction(props) {
  return (
    <RotateInstructionStyle>
      <div className="img-wrapper">
        <img src={`${process.env.PUBLIC_URL}/gifs/rotate.gif`} />
      </div>
      <div className="instruction">Rotate Your Mobile</div>
    </RotateInstructionStyle>
  );
}

export default RotateInstruction;
