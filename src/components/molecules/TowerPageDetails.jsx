import React from "react";
import { TowerPageDetailsStyle } from "./molecules.style";

function TowerPageDetails(props) {
  return (
    <TowerPageDetailsStyle>
      <div className="header">
        <div className="icon-wrapper center">
          <img src={`${process.env.PUBLIC_URL}/icons/building.svg`} />
        </div>
        <div>Block A</div>
      </div>
      <div className="highlights">
        <div>first fatreu</div>
        <div>first fatreu</div>
        <div>first fatreu</div>
      </div>
      <div className="features">
        <div className="feature">
          <div className="left">left side</div>
          <div className="right">right side</div>
        </div>
        <div className="feature">
          <div className="left">left side</div>
          <div className="right">right side</div>
        </div>
        <div className="feature">
          <div className="left">left side</div>
          <div className="right">right side</div>
        </div>
      </div>
    </TowerPageDetailsStyle>
  );
}

export default TowerPageDetails;
