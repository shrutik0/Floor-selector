import React from "react";
import { HomeScreenLogo } from "../atoms/HomeScreenLogo";
import { HomePageDetailsStyle } from "./molecules.style";

function HomePageDetails(props) {
  return (
    <HomePageDetailsStyle>
      <div className="tag-line">Welcome to Arvind Bel Air</div>
      <div className="address-wrapper">
        <div className="address">New Town Road, Yelahanka, Bengaluru</div>
      </div>
      <div className="specs">
        <div className="tag-line">Project Details</div>
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
        <div className="title">2, 2.5 & 3 BHK Premium Apartments</div>
      </div>
    </HomePageDetailsStyle>
  );
}

export default HomePageDetails;
