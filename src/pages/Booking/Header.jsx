import React from "react";
import { HeaderStyle } from "./booking.style";

function Header(props) {
  return (
    <HeaderStyle>
      <img alt="logo" src={`${process.env.PUBLIC_URL}/logos/assl-logo.png`} />
    </HeaderStyle>
  );
}

export default Header;
