import React from "react";
import { HeaderWrapper } from "../styled-components";

function Header({ title, addIcon }) {
  return (
    <HeaderWrapper>
      <p className="header-title">{title}</p>
      {addIcon && <div />}
    </HeaderWrapper>
  );
}

export default Header;
