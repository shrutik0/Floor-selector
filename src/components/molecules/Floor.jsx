import React from "react";
import { FLOORS_VIEWPORTS, TOWERS_VIEWPORTS } from "../../data";
import { FLAT_PATHS, FLOOR_PATHS } from "../../data/paths";
import Path from "../atoms/Path";
import { CarouselItemStyle } from "./molecules.style";
import Svg from "./Svg";

const Floor = ({ towerId, floorId }) => (
  <CarouselItemStyle>
    <Svg
      Bgsrc={`floors/floor-${towerId}.png`}
      svgWidth="fit-content"
      viewBox={FLOORS_VIEWPORTS[towerId]}
      style={{ padding: "1rem" }}
    >
      <g className="flats-svg">
        {Object.keys(FLAT_PATHS[towerId]).map((flat_no, index) => (
          <Path
            d={FLAT_PATHS[towerId][flat_no]}
            key={flat_no}
            id={`${towerId}-tower${floorId}-floor-flat-path-${index}`}
          />
        ))}
      </g>
    </Svg>
  </CarouselItemStyle>
);

export default Floor;
