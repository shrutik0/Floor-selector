import React, { useEffect } from "react";
import {
  useLoading,
  useShowDetails,
  useViewport,
} from "../../contexts/AppContext";
import Compass from "./Compass";
import { CarouselItemStyle, FlatStyle } from "./molecules.style";

function Flat({ towerId, flatIndex, flatNumber }) {
  const { showDetails } = useShowDetails();
  const { isMobile } = useViewport();
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <FlatStyle className="no-select">
      <div
        className="img-wrapper"
        style={{
          width: !isMobile && showDetails ? "calc(100vw - 400px)" : "100vw",
        }}
      >
        <div className="flat-number">{flatNumber}</div>
        <img
          style={{ opacity: loading ? "0" : "1" }}
          src={`${process.env.PUBLIC_URL}/images/flats/${towerId}/${
            flatIndex + 1
          }.png`}
          onLoad={() => setLoading(false)}
        />
      </div>
    </FlatStyle>
  );
}

export default Flat;
