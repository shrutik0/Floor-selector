import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { CustomCollapsibleStyle } from "./molecules.style";

const Trigger = ({ open }) => (
  <div className={open ? "trigger up-down-animate" : "trigger close"}>
    <img
      alt="up-arrow"
      src={`${process.env.PUBLIC_URL}/icons/${"up_arrow"}.svg`}
    />
  </div>
);

function CustomCollapsible({ children, collapsible }) {
  return (
    <CustomCollapsibleStyle>
      <Collapsible
        open
        trigger={collapsible ? <Trigger /> : <></>}
        triggerWhenOpen={collapsible ? <Trigger open /> : <></>}
      >
        {children}
      </Collapsible>
    </CustomCollapsibleStyle>
  );
}

export { CustomCollapsible as Collapsible };
