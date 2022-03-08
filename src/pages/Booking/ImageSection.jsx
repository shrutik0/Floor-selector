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
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
    </ImageSectionStyle>
  );
}

export default ImageSection;
