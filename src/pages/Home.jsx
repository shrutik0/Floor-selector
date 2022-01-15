import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import tippy, { createSingleton } from "tippy.js";
import Path from "../components/atoms/Path";
import { HomeStyle } from "./pages.style";
import { HomeScreenLogo as Logo } from "../components/atoms/HomeScreenLogo";
import HoverInfo from "../components/molecules/HoverInfo";
import FullScreenModeAlert from "../components/atoms/FullScreenModeAlert";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import MouseInstructions from "../components/atoms/MouseInstructions";
import HomePageDetails from "../components/molecules/HomePageDetails";
import { TOWER_NAMES_LIST, TOWER_PATHS } from "../data/paths";
import { Link } from "react-router-dom";
import Svg from "../components/molecules/Svg";
import {
  getAllDifferentUnitsSizesInBlock,
  getAllFlatsInTower,
  getAllFloorsInTower,
  getAllUnitTypesInTower,
} from "../functions/inventory";
import { getFormatedMinMaxUnitSize } from "../functions/helpers";

const towerFeatures = [];
TOWER_NAMES_LIST.forEach((tower) => {
  towerFeatures.push({
    title: `${tower} Block`,
    features: [
      `${getAllUnitTypesInTower(tower).join(" - ")}`,
      `${getAllFloorsInTower(tower).length} Floors`,
      `${getAllFlatsInTower(tower).length} Flats`,
      `${getFormatedMinMaxUnitSize(
        getAllDifferentUnitsSizesInBlock(tower)
      )} Sq. ft`,
    ],
  });
});

function getFullscreenElement() {
  return (
    document.fullscreenElement || //standard property
    document.webkitFullscreenElement || //safari/opera support
    document.mozFullscreenElement || //firefox support
    document.msFullscreenElement
  ); //ie/edge support
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
  }
}

const FullScreenMsg = ({ displayFullScreenMsg, setDisplayFullScreenMsg }) => {
  return (
    displayFullScreenMsg && (
      <FullScreenModeAlert
        handleYes={() => {
          toggleFullscreen();
          setDisplayFullScreenMsg(false);
        }}
        handleNo={() => setDisplayFullScreenMsg(false)}
      />
    )
  );
};

const tippySetup = () => {
  let tippyInstances = [];

  towerFeatures.forEach((tower, index) => {
    const tippyInstance = tippy(`#tower-path-${index}`, {
      content: ReactDOMServer.renderToStaticMarkup(
        <HoverInfo title={tower.title} features={tower.features} />
      ),
    });
    tippyInstances.push(tippyInstance[0]);
  });

  createSingleton(tippyInstances, {
    delay: 0,
    arrow: false,
    moveTransition: "transform 0.2s ease-out",
    allowHTML: true,
    placement: "left-start",
    duration: [0, 1000],
    offset: [10, 30],
  });
};

function Home() {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    tippySetup();
    setTimeout(() => {
      setShowInstructions(true);
    }, 1000);
  }, []);

  return (
    <HomeStyle>
      {showInstructions && <MouseInstructions />}
      <Collapsible>
        <HomePageDetails />
      </Collapsible>
      <Logo />
      {/* <FullScreenMsg
        displayFullScreenMsg={displayFullScreenMsg}
        setDisplayFullScreenMsg={setDisplayFullScreenMsg}
      /> */}

      <Svg Bgsrc={"master-plan.jpg"} viewBox={"0 0 1512 982"}>
        <g>
          {TOWER_NAMES_LIST.map((tower, index) => (
            <Link className="no-dec" to={`/tower/${tower}`} key={tower}>
              <Path d={TOWER_PATHS[tower]} id={`tower-path-${index}`} />
            </Link>
          ))}
        </g>
      </Svg>
    </HomeStyle>
  );
}

export default Home;
