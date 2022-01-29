import React, { useState } from "react";
import Loading from "../atoms/Loading";
import { SvgStyle } from "./molecules.style";

const BGImage = ({ Bgsrc, onLoad, show }) => (
  <image
    height="100%"
    style={{ objectFit: "contain" }}
    xlinkHref={`${process.env.PUBLIC_URL}/images/${Bgsrc}`}
    onLoad={onLoad}
    opacity={show ? 1 : 0}
  />
);

function Svg({ Bgsrc, children, svgWidth = "100%", viewBox, style }) {
  const [loading, setLoading] = useState(true);
  return (
    <SvgStyle>
      {loading && <Loading />}
      <svg
        style={{ width: svgWidth, ...style }}
        preserveAspectRatio="xMidYMid slice"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <BGImage
          Bgsrc={Bgsrc}
          onLoad={() => setLoading(false)}
          show={!loading}
        />
        {children}
      </svg>
    </SvgStyle>
  );
}

export default Svg;
