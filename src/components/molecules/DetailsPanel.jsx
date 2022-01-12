import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { DetailsPanelStyle } from "./molecules.style";

const Trigger = ({ open }) => (
  <div className={open ? "trigger" : "trigger close"}>
    <img
      alt="up-arrow"
      src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
    />
  </div>
);

function DetailsPanel(props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <DetailsPanelStyle>
      <Collapsible
        open={showDetails}
        trigger={<Trigger />}
        triggerWhenOpen={<Trigger open />}
      >
        <div className="home-page-details-body">
          <div className="title">this is title</div>
        </div>
      </Collapsible>
    </DetailsPanelStyle>
  );
}

export default DetailsPanel;
