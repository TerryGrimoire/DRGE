import React from "react";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";

function Header({ langue }) {
  return (
    <div className="header">
      <Navbar langue={langue} />
      <Nav langue={langue} />
    </div>
  );
}

export default Header;
