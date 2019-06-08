import React from "react";
import { HeaderWrapper } from "../styled-components";
import { Link } from "react-router-dom";

function Header({ title, addIcon }) {
  return (
    <HeaderWrapper>
      <p className="header-title">{title}</p>
      {addIcon && (
        <div style={{ fontSize: 58, fontWeight: "bold" }}>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/add">
            +
          </Link>
        </div>
      )}
    </HeaderWrapper>
  );
}

export default Header;
