import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useViewport } from "../../contexts/AppContext";
import { TOWERS_VIEWPORTS } from "../../data";
import { FLOOR_PATHS } from "../../data/paths";
import { getFloorInfo, isFloorBooked } from "../../functions/helpers";
import Path from "../atoms/Path";
import { CarouselItemStyle } from "./molecules.style";
import OnClickInfo from "./OnClickInfo";
import Svg from "./Svg";

const Tower = ({ towerId, clickedFloor, setClickedFloor }) => {
  const { isMobile } = useViewport();

  const navigate = useNavigate();
  return (
    <CarouselItemStyle>
      {clickedFloor && (
        <OnClickInfo
          onViewClick={() =>
            navigate(`/tower/${towerId}/floor/${clickedFloor}`)
          }
          title={getFloorInfo(towerId, clickedFloor).title}
          features={getFloorInfo(towerId, clickedFloor).features}
        />
      )}

      <Svg
        Bgsrc={`towers/tower-${towerId}.png`}
        svgWidth={"auto"}
        viewBox={TOWERS_VIEWPORTS[towerId]}
        onClick={() => setClickedFloor(false)}
      >
        <g className="floors-svg">
          {Object.keys(FLOOR_PATHS[towerId]).map((floor_no, index) => (
            <Link
              className="no-dec no-select"
              to={!isMobile && `/tower/${towerId}/floor/${floor_no}`}
              onClick={(e) => {
                setClickedFloor(floor_no);
                e.stopPropagation();
              }}
            >
              <Path
                d={FLOOR_PATHS[towerId][floor_no]}
                key={floor_no}
                id={`${towerId}-tower-floor-path-${index}`}
                className={
                  isFloorBooked(towerId, floor_no) ? "Sold" : "Available"
                }
              />
            </Link>
          ))}
        </g>
      </Svg>
    </CarouselItemStyle>
  );
};

export default Tower;
