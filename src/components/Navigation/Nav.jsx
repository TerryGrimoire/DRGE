import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/menu2.png";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile nav">
      <button type="button" onClick={() => setOpen(true)}>
        <img src={burger} alt="boutton pour ouvrir le menu" />
      </button>
      {open && (
        <div className="menu">
          <button
            type="button"
            className="croix"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <button type="button" onClick={() => setOpen(false)}>
            <Link to="/">Accueil</Link>
            <Link to="/Association">L'association</Link>
            <Link to="/Actions">Nos actions</Link>
            <Link to="/Contact">Contact</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
