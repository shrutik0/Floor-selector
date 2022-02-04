import React, { useEffect } from "react";
import { PathStyle } from "./atoms.style";

function Path({ d, id }) {
  return <PathStyle d={d} id={id} className="no-select" />;
}

export default Path;
