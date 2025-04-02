import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/menu2.png";

function Nav({ langue }) {
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
            <Link to="/">{langue ? "Accueil" : "Akey"}</Link>
            <Link to="/Association">
              {langue ? "L'association" : "Lasosyasyon"}
            </Link>
            <Link to="/Actions">{langue ? "Nos actions" : "Nout zaksyon"}</Link>
            <Link to="/Contact">{langue ? "Contact" : "Kontakt"}</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
