import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useShowDetails, useViewport } from "../../contexts/AppContext";
import { CustomCollapsibleStyle } from "./molecules.style";

const Trigger = ({ open, onClick }) => (
  <div
    className={
      open ? "trigger no-select up-down-animate" : "trigger no-select close "
    }
    onClick={onClick}
  >
    <img
      alt="up-arrow"
      src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
    />
  </div>
);

function CustomCollapsible({ children, collapsible, open = true }) {
  const isMobile = useViewport();
  const { setShowDetails } = useShowDetails();

  return (
    <CustomCollapsibleStyle>
      <Collapsible
        open={open}
        trigger={
          collapsible ? (
            <Trigger onClick={() => isMobile && setShowDetails(true)} />
          ) : (
            <></>
          )
        }
        triggerWhenOpen={
          collapsible ? (
            <Trigger open onClick={() => isMobile && setShowDetails(false)} />
          ) : (
            <></>
          )
        }
      >
        {children}
      </Collapsible>
    </CustomCollapsibleStyle>
  );
}

export { CustomCollapsible as Collapsible };
