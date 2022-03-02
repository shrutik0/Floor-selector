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
import { TOWER_NAMES_LIST } from "../data";
import { Link, useNavigate } from "react-router-dom";
import Svg from "../components/molecules/Svg";
import { getFormatedMinMaxUnitSize, getTowerInfo } from "../functions/helpers";
import { TOWER_PATHS } from "../data/paths";
import { useShowDetails, useViewport } from "../contexts/AppContext";
import OnClickInfo from "../components/molecules/OnClickInfo";

const tippySetup = () => {
  let tippyInstances = [];

  TOWER_NAMES_LIST.forEach((tower, index) => {
    const towerInfo = getTowerInfo(tower);

    const tippyInstance = tippy(`#tower-path-${index}`, {
      content: ReactDOMServer.renderToStaticMarkup(
        <HoverInfo title={towerInfo.title} features={towerInfo.features} />
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
    appendTo: document.body,
  });
};

function Home() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [clickedTower, setClickedTower] = useState(false);
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) tippySetup();
    setTimeout(() => {
      setShowInstructions(true);
    }, 1000);
  }, []);

  return (
    <HomeStyle>
      {showInstructions && <MouseInstructions />}
      {clickedTower && (
        <OnClickInfo
          title={getTowerInfo(clickedTower).title}
          features={getTowerInfo(clickedTower).features}
          onViewClick={() => navigate(`/tower/${clickedTower}`)}
        />
      )}
      <Collapsible collapsible open={true}>
        <HomePageDetails />
      </Collapsible>
      <Logo />

      <Svg
        Bgsrc={"master-plan.jpg"}
        viewBox={"0 0 1512 982"}
        onClick={() => setClickedTower(false)}
      >
        {TOWER_NAMES_LIST.map((tower, index) => (
          <Link
            className="no-dec no-select"
            to={!isMobile && `/tower/${tower}`}
            key={tower}
            onClick={(e) => {
              setClickedTower(tower);
              e.stopPropagation();
            }}
          >
            <Path d={TOWER_PATHS[tower]} id={`tower-path-${index}`} />
          </Link>
        ))}
      </Svg>
    </HomeStyle>
  );
}

export default Home;
