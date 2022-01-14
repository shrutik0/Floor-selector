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
      <g id="floors">
        {Object.keys(FLOOR_PATHS[towerId]).map((floor_no) => (
          <Path d={FLOOR_PATHS[towerId][floor_no]} key={floor_no} />
        ))}
      </g>
    </Svg>
  </TowerStyle>
);

export default Tower;
