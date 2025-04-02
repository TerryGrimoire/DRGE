import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Youtube from "../assets/youtube.png";
import Tiktok from "../assets/tiktok.png";

import contact from "../assets/contact.jpg";
import federation from "../assets/federation.jpg";
import mail from "../assets/mail.png";
import ancre from "../assets/ancre.png";
import monde from "../assets/monde.png";

function Contact({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ecoles, setEcoles] = useState([]);

  const prepareData3 = (data2) => {
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
    setEcoles(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_HOME)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData3(data2.data));
  }, []);

  const ecolo = ecoles.map((eco) => eco.presse);
  return (
    <main className="contact">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/contact`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="actions_top">
        <h1>{langue ? "Contact" : "Kontakt"}</h1>
        <img src={contact} alt="" />
        <div className="veil" />
      </section>
      <section className="contact_content">
        <img
          src={federation}
          alt="carte qui montre toutes les fédérations De La Réunion aux grandes écoles"
        />
        <ul>
          <li>
            <h3>{langue ? "Nous joindre :" : "Kontakt anou"}</h3>
          </li>

          <li>
            <img src={mail} alt="" />{" "}
            <a href="mailto:reunion@dtge.org">reunion@dtge.org</a>
          </li>
          <li>
            <img src={monde} alt="" />{" "}
            <p>
              {langue
                ? "Une fédération d'échelle nationale"
                : "In fédérasyon nasyonal"}
            </p>
          </li>
          <li>
            <img src={ancre} alt="" />{" "}
            <p>{langue ? "Un ancrage Réunionnais" : "In lankraj réyoné"}</p>
          </li>
        </ul>
        <div>
          <h3>{langue ? "Nous suivre :" : "Suiv anou :"}</h3>
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
      </section>
      <section className="footer_partenaires">
        <h3>{langue ? "Ils parlent de nous" : "Bana i koz de nou"}</h3>
        <div>
          {ecolo.map((ecole) => (
            <img src={ecole} alt={`logo de l'école`} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;
