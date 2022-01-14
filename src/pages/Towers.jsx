import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Path from "../components/atoms/Path";
import Carousel from "../components/molecules/Carousel";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import Svg from "../components/molecules/Svg";
import Tower from "../components/molecules/Tower";
import TowerPageDetails from "../components/molecules/TowerPageDetails";
import { FLOOR_PATHS, TOWER_NAMES_LIST } from "../data/paths";
import { TowersPageStyle } from "./pages.style";

const HomeButton = () => (
  <Link to={"/"}>
    <div className="home-btn center">
      <img src={`${process.env.PUBLIC_URL}/icons/home.svg`} />
    </div>
  </Link>
);

function Towers() {
  const params = useParams();
  const towerId = params.towerId;

  return (
    <TowersPageStyle>
      <HomeButton />
      <Collapsible>
        <TowerPageDetails />
      </Collapsible>
      <Carousel onChange={(e) => console.log(e)}>
        {TOWER_NAMES_LIST.map((tower) => (
          <Tower towerId={tower} />
        ))}
      </Carousel>
    </TowersPageStyle>
  );
}

export default Towers;
