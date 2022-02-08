import React, { useEffect } from "react";
import { PathStyle } from "./atoms.style";

function Path({ d, id, className = " " }) {
  return <PathStyle d={d} id={id} className={"no-select " + className} />;
}

export default Path;
