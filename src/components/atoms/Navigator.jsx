import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { NavigatorStyle } from "./atoms.style";

function Navigator({
  title,
  options,
  defaultOption,
  icon,
  onChange,
  className,
}) {
  return (
    <NavigatorStyle className={className}>
      <div className={"icon-wrapper center"}>
        <img src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`} />
      </div>
      <div>{title}</div>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
        className="dropdown"
        controlClassName="control"
        placeholderClassName="placeholder"
        menuClassName="menu custom-scroll"
        arrowClassName="arrow"
        onChange={onChange}
      />
    </NavigatorStyle>
  );
}

export default Navigator;
