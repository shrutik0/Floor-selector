import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useViewport } from "../../contexts/AppContext";
import { FLOORS_COMPASS_ANGLES, FLOORS_VIEWPORTS } from "../../data";
import { FLAT_PATHS } from "../../data/paths";
import { getFlatInfo } from "../../functions/helpers";
import { getAllFlatsInFloor } from "../../functions/inventory";
import Path from "../atoms/Path";
import Compass from "./Compass";
import { CarouselItemStyle } from "./molecules.style";
import OnClickInfo from "./OnClickInfo";
import Svg from "./Svg";

const getFlatIndex = (flatNum = "") =>
  parseInt(flatNum[flatNum.length - 1]) - 1;

const Floor = ({
  towerId,
  floorId,
  setClickedFlat,
  clickedFlat,
  currentFloor,
}) => {
  const flats = getAllFlatsInFloor(towerId, floorId.toString());
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  const getSrcByTowerId =(towerId)=>["A","B","C","D"].includes(towerId)?"A":"E"
  return (
    <CarouselItemStyle>
      {clickedFlat !== false && (
        <OnClickInfo
          title={getFlatInfo(towerId, currentFloor, clickedFlat).title}
          features={getFlatInfo(towerId, currentFloor, clickedFlat).features}
          onViewClick={() => {
            navigate(
              `/tower/${towerId}/floor/${floorId}/flat/${
                towerId + "-" + floorId + "0" + (parseInt(clickedFlat) + 1)
              }`
            );
            setClickedFlat(false);
          }}
        />
      )}
      <Svg
        Bgsrc={`floors/floor-${getSrcByTowerId(towerId)}.png`}
        svgWidth="auto"
        style={{ padding: isMobile ? "1rem" : "0rem" }}
        onClick={() => setClickedFlat(false)}
      >
        <g className="flats-svg">
          {flats
            .map((flat) => flat.FlatNumber)
            .map((flatNum, index) => {
              const flat_no = getFlatIndex(flatNum);
              return (
                <Link
                  className="no-dec no-select"
                  onClick={(e) => {
                    setClickedFlat(index);
                    e.stopPropagation();
                  }}
                  to={
                    !isMobile &&
                    `/tower/${towerId}/floor/${floorId}/flat/${
                      towerId + "-" + floorId + "0" + (flat_no + 1)
                    }`
                  }
                >
                  <Path
                    d={FLAT_PATHS[towerId][flat_no]}
                    key={flat_no}
                    id={`${towerId}-tower${floorId}-floor-flat-path-${flat_no}`}
                    className={
                      (flats[index] &&
                        flats[index]["UnitStatus"] == "Available") ||
                      flats[index]["UnitStatus"] == "available"
                        ? "Available"
                        : "Sold"
                    }
                  />
                </Link>
              );
            })}
        </g>
      </Svg>
      <Compass
        bottom="80px"
        right={isMobile ? "85%" : "20px"}
        angle={FLOORS_COMPASS_ANGLES[towerId]}
        zIndex="-1"
      />
    </CarouselItemStyle>
  );
};

export default Floor;
