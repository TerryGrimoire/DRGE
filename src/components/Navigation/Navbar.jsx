import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Youtube from "../../assets/youtube.png";
import Tiktok from "../../assets/tiktok.png";

function Navbar({ langue }) {
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
        <Link to="/">{langue ? "Accueil" : "Akey"}</Link>
        <Link to="/Association">
          {langue ? "L'association" : "Lasosyasyon"}
        </Link>
        <Link to="/Actions">{langue ? "Nos actions" : "Nout zaksyon"}</Link>
        <Link to="/Contact">{langue ? "Contact" : "Kontakt"}</Link>
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
        <a
          href="https://www.tiktok.com/@dtge.reunion?_t=ZN-8vCjhpfGIFe&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Tiktok} alt="logo de TikTok" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
