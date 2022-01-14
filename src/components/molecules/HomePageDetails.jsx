import React from "react";
import { HomeScreenLogo } from "../atoms/HomeScreenLogo";
import { HomePageDetailsStyle } from "./molecules.style";

function HomePageDetails(props) {
  return (
    <HomePageDetailsStyle>
      <div className="tag-line">2, 2.5 and 3 BHK Premium Apartments</div>
      <div className="title">
        <HomeScreenLogo />
      </div>
      <div className="address-wrapper">
        <div className="address">your, address, goes here</div>
        <div className="btn">View Map</div>
      </div>
      <div className="specs">
        <div className="specs-title">We brings you</div>
        <div className="items">
          <div className="item">
            <div className="key">4</div>
            <div className="value">Towers</div>
          </div>
          <div className="item">
            <div className="key">334</div>
            <div className="value">Flats</div>
          </div>
          <div className="item">
            <div className="key">16</div>
            <div className="value">Floors</div>
          </div>
        </div>
      </div>
    </HomePageDetailsStyle>
  );
}

export default HomePageDetails;
