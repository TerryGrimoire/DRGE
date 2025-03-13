import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import fleche from "../../assets/fleche.png";
import fleche2 from "../../assets/fleche2.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer_donation">
        <h4>
          Vous souhaitez aider un étudiant réunionnais à réussir ses études ?{" "}
        </h4>
        <p>
          Chaque don compte pour financer nos actions et permettre à nos
          bénéficiaires de continuer leurs études. Les donations permettent non
          seulement de financer des bourses d'installations mais également à
          notre association de rémunérer des intervenants exterieurs lors de nos
          sessions de formation.
        </p>

        <div className="CTA_container">
          <Link to="/Contact">
            <button type="button">
              <p>Découvrir vos options</p>{" "}
              <img src={fleche2} alt="fleche" className="fleche" />
            </button>
          </Link>
          <a href="/" target="_blank" rel="noreferrer">
            <button type="button">
              <p>Faire un don</p>
              <img src={fleche} alt="fleche" className="fleche" />
            </button>
          </a>
        </div>
      </section>
      <section className="footer_contact">
        <img src={logo} alt="logo de La Réunion aux grandes écoles" />
        <p>
          Nous contacter :{" "}
          <a href="mailto:reunion@dtge.org">reunion@dtge.org</a> |{" "}
          <a href="tel:+33632492239">06.32.49.22.39</a> |{" "}
          <a href="tel:+33627458627">06.27.45.86.27</a>{" "}
        </p>
        <p>
          De La Réunion aux grandes écoles - Tous droits réservés. Site réalisé
          par le{" "}
          <a
            href="https://grimoire-numerique.re/"
            target="_blank"
            rel="noreferrer"
          >
            Grimoire Numérique
          </a>
          .{" "}
        </p>
        <p>
          Ce site a été financé par l'Union Européenne dans le cadre du
          programme FEDER-FSE+ Réunion dont l'Autorité de gestion est la Région
          Réunion. L'Europe s'engage à La Réunion avec le fonds FEDER{" "}
        </p>
        <div>
          <img src={region} alt="logo Région Réunion" />
          <img src={ue} alt="logo de l'Union Européenne" />
        </div>
      </section>
      <div className="footer_bottom">
        <Link to="/Mentions">Mentions Légales</Link>
        <Link to="/Mentions">Politique de confidentialité</Link>
      </div>
    </footer>
  );
}

export default Footer;
