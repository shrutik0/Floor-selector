import React from "react";
import { TOWERS_VIEWPORTS } from "../../data";
import { FLOOR_PATHS } from "../../data/paths";
import Path from "../atoms/Path";
import { TowerStyle } from "./molecules.style";
import Svg from "./Svg";

const Tower = ({ towerId }) => (
  <TowerStyle>
    <Svg
      Bgsrc={`towers/tower-${towerId}.png`}
      svgWidth="fit-content"
      viewBox={TOWERS_VIEWPORTS[towerId]}
      style={{
        paddingLeft: towerId === "A" || towerId == "D" ? "30vw" : "10vw",
      }}
    >
      <g className="floors-svg">
        {Object.keys(FLOOR_PATHS[towerId]).map((floor_no, index) => (
          <Path
            d={FLOOR_PATHS[towerId][floor_no]}
            key={floor_no}
            id={`${towerId}-tower-floor-path-${index}`}
          />
        ))}
      </g>
    </Svg>
  </TowerStyle>
);

export default Tower;
