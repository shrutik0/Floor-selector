import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, useParams } from "react-router-dom";
import tippy, { createSingleton } from "tippy.js";
import Carousel from "../components/molecules/Carousel";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import HoverInfo from "../components/molecules/HoverInfo";
import Tower from "../components/molecules/Tower";
import TowerPageDetails from "../components/molecules/TowerPageDetails";
import { TOWER_NAMES_LIST } from "../data/paths";
import {
  getFormalNameFromNumber,
  getFormalUnitType,
  getFormatedMinMaxUnitSize,
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
  console.log(floors);

  const floorFeatures = [];

  floors.forEach((floor) => {
    floorFeatures.push({
      title: `${getFormalNameFromNumber(floor)} floor`,
      features: [
        `${getAllFlatsInFloor(towerId, floor).length} Flats`,
        `${[getAllUnitTypesInTower(towerId).join(" and ")]}`,
        `${getFormatedMinMaxUnitSize(
          getAllDifferentUnitsSizesInFloor(towerId, floor)
        )} Sq.fts`,
        `${getAllAvailableFlatsInFloor(towerId, floor).length} Available`,
      ],
    });
  });

  setTimeout(() => {
    let tippyInstances = [];
    floorFeatures.forEach((floor, index) => {
      const tippyInstance = tippy(`#${towerId}-tower-floor-path-${index}`, {
        content: ReactDOMServer.renderToStaticMarkup(
          <HoverInfo title={floor.title} features={floor.features} />
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
  const [currentTower, setCurrentTower] = useState(useParams().towerId);

  useEffect(() => {
    TOWER_NAMES_LIST.forEach((tower) => tippySetup(tower));
  }, []);

  return (
    <TowersPageStyle>
      <HomeButton />
      <Collapsible>
        <TowerPageDetails
          title={`${currentTower} Block`}
          highlights={[
            <>
              {getAllFlatsInTower(currentTower).length} Units{" "}
              {
                <span className="separate">
                  {getAllAvailableFlatsInTower(currentTower).length} Available
                </span>
              }
            </>,
            `${getFormatedMinMaxUnitSize(
              getAllDifferentUnitsSizesInBlock(currentTower)
            )} Sq fts`,
          ]}
          features={[
            ...getAllUnitTypesInTower(currentTower).map((type) => ({
              key: `${type} Apartments`,
              value: `${
                getAllFlatsInTower(currentTower).filter(
                  (flat) => getFormalUnitType(flat["Unit Type"]) === type
                ).length
              } units`,
            })),
          ]}
        />
      </Collapsible>
      <Carousel
        titleList={TOWER_NAMES_LIST}
        onChange={(changedItemIndex) =>
          setCurrentTower(TOWER_NAMES_LIST[changedItemIndex])
        }
        currentItemIndex={TOWER_NAMES_LIST.indexOf(currentTower)}
      >
        {TOWER_NAMES_LIST.map((tower) => (
          <Tower towerId={tower} key={tower} />
        ))}
      </Carousel>
    </TowersPageStyle>
  );
}

export default Towers;
