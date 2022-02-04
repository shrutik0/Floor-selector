import React from "react";
import { Link } from "react-router-dom";
import { TOWERS_VIEWPORTS } from "../../data";
import { FLOOR_PATHS } from "../../data/paths";
import Path from "../atoms/Path";
import { CarouselItemStyle } from "./molecules.style";
import Svg from "./Svg";

const Tower = ({ towerId }) => (
  <CarouselItemStyle>
    <Svg
      Bgsrc={`towers/tower-${towerId}.png`}
      svgWidth="fit-content"
      viewBox={TOWERS_VIEWPORTS[towerId]}
      style={{
        paddingLeft: towerId == "D" && "10vw",
      }}
    >
      <g className="floors-svg">
        {Object.keys(FLOOR_PATHS[towerId]).map((floor_no, index) => (
          <Link to={`/tower/${towerId}/floor/${floor_no}`}>
            <Path
              d={FLOOR_PATHS[towerId][floor_no]}
              key={floor_no}
              id={`${towerId}-tower-floor-path-${index}`}
            />
          </Link>
        ))}
      </g>
    </Svg>
  </CarouselItemStyle>
);

export default Tower;
