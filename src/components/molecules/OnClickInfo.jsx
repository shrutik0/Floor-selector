import React from "react";
import { useViewport } from "../../contexts/AppContext";
import HoverInfo from "./HoverInfo";
import { OnClickInfoStyle } from "./molecules.style";

function OnClickInfo({ title, features, onViewClick, style }) {
  const { isMobile } = useViewport();
  return isMobile ? (
    <OnClickInfoStyle style={style}>
      <HoverInfo title={title} features={features} onViewClick={onViewClick} />
    </OnClickInfoStyle>
  ) : (
    <></>
  );
}

export default OnClickInfo;
