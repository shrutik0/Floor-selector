import React from "react";
import { Link } from "react-router-dom";
import { FLOORS_VIEWPORTS, TOWERS_VIEWPORTS } from "../../data";
import { FLAT_PATHS, FLOOR_PATHS } from "../../data/paths";
import { getFlatInfo } from "../../functions/helpers";
import Path from "../atoms/Path";
import { CarouselItemStyle } from "./molecules.style";
import OnClickInfo from "./OnClickInfo";
import Svg from "./Svg";

const Floor = ({
  towerId,
  floorId,
  setClickedFlat,
  clickedFlat,
  currentFloor,
}) => (
  <CarouselItemStyle>
    {clickedFlat && (
      <OnClickInfo
        title={getFlatInfo(towerId, currentFloor, clickedFlat).title}
        features={getFlatInfo(towerId, currentFloor, clickedFlat).features}
        onViewClick={() => {
          console.log("Working on it :)");
          setClickedFlat(false);
        }}
      />
    )}
    <Svg
      Bgsrc={`floors/floor-${towerId}.png`}
      svgWidth="fit-content"
      viewBox={FLOORS_VIEWPORTS[towerId]}
      style={{ padding: "1rem" }}
      onClick={() => setClickedFlat(false)}
    >
      <g className="flats-svg">
        {Object.keys(FLAT_PATHS[towerId]).map((flat_no, index) => (
          <Link
            className="no-dec no-select"
            onClick={(e) => {
              setClickedFlat(flat_no);
              e.stopPropagation();
            }}
            to=""
          >
            <Path
              d={FLAT_PATHS[towerId][flat_no]}
              key={flat_no}
              id={`${towerId}-tower${floorId}-floor-flat-path-${index}`}
            />
          </Link>
        ))}
      </g>
    </Svg>
  </CarouselItemStyle>
);

export default Floor;
