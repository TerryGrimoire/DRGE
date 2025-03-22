import React from "react";
import burger from "../../assets/menu2.png";

function Nav() {
  return (
    <div className="mobile nav">
      <button type="button">
        <img src={burger} alt="boutton pour ouvrir le menu" />
      </button>
    </div>
  );
}

export default Nav;
