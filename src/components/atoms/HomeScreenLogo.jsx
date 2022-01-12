import React from "react";
import { HomeScreenLogoStyle } from "./atoms.style";

function HomeScreenLogo(props) {
  return (
    <HomeScreenLogoStyle>
      <img
        height="100%"
        src={`${process.env.PUBLIC_URL}/logos/assl-logo.png`}
      />
    </HomeScreenLogoStyle>
  );
}

export { HomeScreenLogo };
