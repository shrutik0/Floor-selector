import React from "react";
import { ImageSectionStyle } from "./booking.style";

function ImageSection(props) {
  return (
    <ImageSectionStyle id="image-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/booking-thumb.jpg`}
        className="img"
        alt="booking-thumb"
      />
      <div className="title ft-mar">Arvind bel air</div>
      <div className="address">
        <img
          src={`${process.env.PUBLIC_URL}/icons/location-light.svg`}
          className="img"
          alt="icon"
        />
        <span className="ft-lt">Yelahanka, Bengaluru</span>
      </div>
      <div className="desc ft-lt">
        Vaastu-compliant 2 & 3 BHK apartments with unobstructed views and
        excellent connectivity.
      </div>
    </ImageSectionStyle>
  );
}

export default ImageSection;
