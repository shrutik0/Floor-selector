import React from "react";
import { FLOOR_PATHS } from "../../data/paths";
import Path from "../atoms/Path";
import { Collapsible } from "./CustomCollapsible";
import { TowerStyle } from "./molecules.style";
import Svg from "./Svg";
import TowerPageDetails from "./TowerPageDetails";

const Tower = ({ towerId }) => (
  <TowerStyle>
    <Svg
      Bgsrc={"towers/tower-a.png"}
      svgWidth="fit-content"
      viewBox="0 0 950 1189"
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
