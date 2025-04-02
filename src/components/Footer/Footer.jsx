/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import papa from "papaparse";

import logo from "../../assets/logo.png";
import fleche from "../../assets/fleche.png";
import fleche2 from "../../assets/fleche2.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer({ langue }) {
  const [data, setData] = useState([]);

  const prepareData = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line) => {
      data2[0].forEach((key, j) => {
        obj = { ...obj, [key]: line[j] };
      });

      return obj;
    });

    json.shift();
    setData(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_HOME)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  const partenaires = data.map((partenaire) => partenaire.partenaires);

  return (
    <footer className="footer">
      <section className="footer_donation">
        <h4>
          {langue
            ? "Vous souhaitez aider un étudiant réunionnais à réussir ses études ?"
            : "Zot i vé èd in létudyan réyoné réusi son zétud ?"}
        </h4>
        <p>
          {langue
            ? "Chaque don compte pour financer nos actions et permettre à nos bénéficiaires de continuer leurs études. Les donations permettent non seulement de financer des bourses d'installations mais également à notre association de rémunérer des intervenants exterieurs lors de nos sessions de formation."
            : "Sak don i kont pou finans nout bann zaksyon é permèt nout bann bénéfisièr kontinyé zot zétud. Bann donasyon i permet anou finans les bours linstalasyon mé osi rémunèr bann zintervenan ekstèrn anout lasosyasyon pandan nout bann sesyon formasyon."}
        </p>

        <div className="CTA_container">
          <Link to="/Contact">
            <button type="button">
              <p>{langue ? "Nous contacter" : "Kontakt anou"}</p>{" "}
              <img src={fleche2} alt="fleche" className="fleche" />
            </button>
          </Link>
          <a href="/" target="_blank" rel="noreferrer">
            <button type="button">
              <p>{langue ? "Faire un don" : "Fé in don"}</p>
              <img src={fleche} alt="fleche" className="fleche" />
            </button>
          </a>
        </div>
      </section>
      <section className="footer_contact">
        <img src={logo} alt="logo de La Réunion aux grandes écoles" />
        <p>
          {langue ? "Nous contacter : " : "kontakt anou "}
          <a href="mailto:reunion@dtge.org">reunion@dtge.org</a> |{" "}
        </p>
        <p>
          {langue
            ? "De La Réunion aux grandes écoles - Tous droits réservés. Site réalisé par le "
            : "De La Rényon o grann zékol - Tout drwa rézervé. Sit réalisé par le "}
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
          {langue
            ? "Ce site a été financé par l'Union Européenne dans le cadre du programme FEDER-FSE+ Réunion dont l'Autorité de gestion est la Région Réunion. L'Europe s'engage à La Réunion avec le fonds FEDER."
            : "Sit la été finansé par lunyon éropéinn ek lo program FEDER-FSE+ Rényon ek son lotorité de gestyon La Réjyon Rényon. Lérop i angaj ali su La Rényon ek le fon FEDER."}
        </p>
        <div>
          <img src={region} alt="logo Région Réunion" />
          <img src={ue} alt="logo de l'Union Européenne" />
        </div>
      </section>
      <section className="footer_partenaires">
        <h4>
          {langue ? "Découvrez nos partenaires" : "Dékouv nout bann parténèr"}
        </h4>
        <div>
          {partenaires.map((el) => (
            <img src={el} alt="logo partenaire" />
          ))}
        </div>
      </section>
      <div className="footer_bottom">
        <Link to="/Mentions">
          {langue ? "Mentions légales" : "Mansyon légal"}
        </Link>
        <Link to="/Mentions">
          {langue ? "Politique de confidentialité" : "Politik konfidansyalité"}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
