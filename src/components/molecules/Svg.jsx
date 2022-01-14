import React from "react";
import { SvgStyle } from "./molecules.style";

const BGImage = ({ Bgsrc }) => (
  <image
    height="100%"
    style={{ objectFit: "contain" }}
    xlinkHref={`${process.env.PUBLIC_URL}/images/${Bgsrc}`}
  />
);

function Svg({ Bgsrc, children, svgWidth = "100%", viewBox }) {
  return (
    <SvgStyle>
      <svg
        style={{ width: svgWidth }}
        preserveAspectRatio="xMidYMid slice"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <BGImage Bgsrc={Bgsrc} />
        {children}
      </svg>
    </SvgStyle>
  );
}

export default Svg;
