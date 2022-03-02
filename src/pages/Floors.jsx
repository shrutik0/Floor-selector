import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, useNavigate, useParams } from "react-router-dom";
import tippy, { createSingleton } from "tippy.js";
import { string } from "yup";
import Carousel from "../components/molecules/Carousel";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import Floor from "../components/molecules/Floor";
import HoverInfo from "../components/molecules/HoverInfo";
import Tower from "../components/molecules/Tower";
import CarouselPageDetails from "../components/molecules/CarouselPageDetails";
import { FLOORS, TOWER_NAMES_LIST } from "../data";
import {
  getFlatInfo,
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
import Navigator from "../components/atoms/Navigator";
import { useViewport } from "../contexts/AppContext";
import OnClickInfo from "../components/molecules/OnClickInfo";

const getFlatIndex = (flatNum = "") =>
  parseInt(flatNum[flatNum.length - 1]) - 1;

const HomeButton = () => (
  <Link to={"/"}>
    <div className="home-btn center">
      <img src={`${process.env.PUBLIC_URL}/icons/home.svg`} />
    </div>
  </Link>
);

const tippySetup = (towerId, floorNo) => {
  const flatFeatures = [];
  if (!towerId) return;
  const flats = getAllFlatsInFloor(towerId, floorNo);

  for (let i = 0; i < flats.length; i++)
    flatFeatures.push(getFlatInfo(towerId, floorNo, i));

  setTimeout(() => {
    let tippyInstances = [];
    flatFeatures.forEach((flat, index) => {
      const tippyInstance = tippy(
        `#${towerId}-tower${floorNo}-floor-flat-path-${getFlatIndex(
          flat.title
        )}`,
        {
          content: ReactDOMServer.renderToStaticMarkup(
            <HoverInfo title={flat.title} features={flat.features} />
          ),
        }
      );
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

function Floors() {
  const { floorId, towerId } = useParams();
  const [currentFloor, setCurrentFloor] = useState(floorId);
  const [clickedFlat, setClickedFlat] = useState(false);
  const navigate = useNavigate();
  const { isMobile } = useViewport();

  useEffect(() => {
    !isMobile &&
      FLOORS.forEach((floor) => tippySetup(towerId, floor.toString()));
  }, []);

  return (
    <TowersPageStyle>
      <HomeButton />

      <Collapsible collapsible={true} open={!isMobile}>
        <CarouselPageDetails
          title={`${getFormalNameFromNumber(currentFloor)} Floor`}
          Header={
            <Header
              currentFloor={currentFloor}
              currentTower={towerId}
              onFloorChangge={(floor) => setCurrentFloor(floor.value)}
              onTowerChange={(tower) => navigate(`/tower/${tower.value}`)}
            />
          }
          highlights={[
            `${getAllFlatsInFloor(towerId, currentFloor).length} Units`,
            `${
              getAllAvailableFlatsInFloor(towerId, currentFloor).length
            } Available`,
          ]}
          features={[
            ...getAllUnitTypesInTower(towerId).map((type) => ({
              key: `${type}`,
              value: `${
                getAllFlatsInFloor(towerId, currentFloor).filter(
                  (flat) => getFormalUnitType(flat["UnitType"]) === type
                ).length
              } units`,
            })),
            {
              key: "Unit Sizes",
              value: `${getFormatedMinMaxUnitSize(
                getAllDifferentUnitsSizesInFloor(towerId, currentFloor)
              )} Sq. ft`,
            },
          ]}
        />
      </Collapsible>
      <Carousel
        titleList={FLOORS}
        onChange={(changedItemIndex) => {
          setCurrentFloor(FLOORS.indexOf(changedItemIndex).toString());
          setClickedFlat(false);
        }}
        currentItemIndex={FLOORS.indexOf(parseInt(currentFloor))}
      >
        {FLOORS.map((floor) => (
          <Floor
            towerId={towerId}
            key={floor}
            floorId={floor}
            setClickedFlat={setClickedFlat}
            clickedFlat={clickedFlat}
            currentFloor={currentFloor}
          />
        ))}
      </Carousel>
    </TowersPageStyle>
  );
}

export default Floors;

const Header = ({
  currentTower,
  currentFloor,
  onTowerChange,
  onFloorChangge,
}) => (
  <>
    <Navigator
      defaultOption={currentTower}
      title={"Tower"}
      icon={"building"}
      options={TOWER_NAMES_LIST.map((tower) => ({
        label: tower,
        value: tower,
      }))}
      onChange={onTowerChange}
    />
    <Navigator
      defaultOption={getFormalNameFromNumber(currentFloor)}
      title={"Floor"}
      icon={"layers"}
      options={FLOORS.map((floor) => ({
        label: getFormalNameFromNumber(floor),
        value: floor,
      }))}
      onChange={onFloorChangge}
    />
  </>
);
