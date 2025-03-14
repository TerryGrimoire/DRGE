import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Youtube from "../../assets/youtube.png";

function Navbar() {
  return (
    <div className="desktop navbar">
      <Link to="/">
        <img
          src={logo}
          alt="logo de La Réunion aux grandes écoles"
          className="logo"
        />
      </Link>
      <div className="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/Association">L'association</Link>
        <Link to="/Actions">Nos actions</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <a
          href="https://www.facebook.com/DRGE974?locale=fr_FR"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Facebook} alt="logo de Facebook" />
        </a>
        <a
          href="https://www.instagram.com/dtge.reunion/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="logo d'Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/de-la-r%C3%A9union-aux-grandes-ecoles/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="logo de Linkedin" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQNprTB2Uwe1CskPv2AJd8w"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Youtube} alt="logo de Youtube" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
