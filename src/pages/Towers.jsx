import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, useParams } from "react-router-dom";
import tippy, { createSingleton } from "tippy.js";
import Carousel from "../components/molecules/Carousel";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import HoverInfo from "../components/molecules/HoverInfo";
import Tower from "../components/molecules/Tower";
import CarouselPageDetails from "../components/molecules/CarouselPageDetails";
import { TOWER_NAMES_LIST } from "../data";
import {
  getFloorInfo,
  getFormalNameFromNumber,
  getFormalUnitType,
  getFormatedMinMaxUnitSize,
  getTowerInfo,
} from "../functions/helpers";
import {
  getAllAvailableFlatsInFloor,
  getAllAvailableFlatsInTower,
  getAllDifferentUnitsSizesInBlock,
  getAllDifferentUnitsSizesInFloor,
  getAllFlatsInFloor,
  getAllFlatsInTower,
  getAllFloorsInTower,
  getAllUnitTypesInTower,
} from "../functions/inventory";
import { TowersPageStyle } from "./pages.style";
import Dropdown from "../components/atoms/Navigator";
import Navigator from "../components/atoms/Navigator";
import { useViewport } from "../contexts/AppContext";
import OnClickInfo from "../components/molecules/OnClickInfo";

const HomeButton = () => (
  <Link to={"/"}>
    <div className="home-btn center">
      <img src={`${process.env.PUBLIC_URL}/icons/home.svg`} />
    </div>
  </Link>
);

const tippySetup = (towerId) => {
  if (!towerId) return;
  const floors = getAllFloorsInTower(towerId);

  setTimeout(() => {
    let tippyInstances = [];
    floors.forEach((floor, index) => {
      const floorInfo = getFloorInfo(towerId, floor);
      const tippyInstance = tippy(`#${towerId}-tower-floor-path-${index}`, {
        content: ReactDOMServer.renderToStaticMarkup(
          <HoverInfo title={floorInfo.title} features={floorInfo.features} />
        ),
      });
      tippyInstances.push(tippyInstance[0]);
    });

    createSingleton(tippyInstances, {
      delay: 0,
      arrow: false,
      moveTransition: "transform 0.1s ease-out",
      allowHTML: true,
      placement: "left-start",
      duration: [0, 1000],
      offset: [-40, 30],
    });
  }, 50);
};

function Towers() {
  const { isMobile } = useViewport();
  const [currentTower, setCurrentTower] = useState(useParams().towerId);
  const [clickedFloor, setClickedFloor] = useState(false);

  useEffect(() => {
    !isMobile && TOWER_NAMES_LIST.forEach((tower) => tippySetup(tower));
  }, []);

  return (
    <TowersPageStyle>
      <HomeButton />
      <Collapsible collapsible={true} open={!isMobile}>
        <CarouselPageDetails
          Header={
            <Header
              onChange={(e) => setCurrentTower(e.label)}
              title={`Tower`}
              defaultOption={currentTower}
            />
          }
          highlights={[
            `${getAllFlatsInTower(currentTower).length} Units`,
            `${getAllAvailableFlatsInTower(currentTower).length} Available`,
          ]}
          features={[
            ...getAllUnitTypesInTower(currentTower).map((type) => ({
              key: `${type} Apartments`,
              value: `${
                getAllFlatsInTower(currentTower).filter(
                  (flat) => getFormalUnitType(flat["UnitType"]) === type
                ).length
              } units`,
            })),
            {
              key: "Unit Sizes",
              value: `${getFormatedMinMaxUnitSize(
                getAllDifferentUnitsSizesInBlock(currentTower)
              )} Sq fts`,
            },
          ]}
        />
      </Collapsible>
      <Carousel
        titleList={TOWER_NAMES_LIST}
        onChange={(changedItemIndex) => {
          setCurrentTower(TOWER_NAMES_LIST[changedItemIndex]);
          setClickedFloor(false);
        }}
        currentItemIndex={TOWER_NAMES_LIST.indexOf(currentTower)}
      >
        {TOWER_NAMES_LIST.map((tower) => (
          <Tower
            towerId={tower}
            key={tower}
            clickedFloor={clickedFloor}
            setClickedFloor={setClickedFloor}
          />
        ))}
      </Carousel>
    </TowersPageStyle>
  );
}

export default Towers;

const Header = ({ title, defaultOption, onChange }) => (
  <Navigator
    defaultOption={defaultOption}
    title={title}
    icon={"building"}
    options={TOWER_NAMES_LIST.map((tower) => ({ label: tower, value: tower }))}
    onChange={onChange}
  />
);
