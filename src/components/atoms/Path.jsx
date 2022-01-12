import React, { useEffect } from "react";
import { PathStyle } from "./atoms.style";

function Path({ d, id }) {
  return <PathStyle d={d} id={id} />;
}

export default Path;
