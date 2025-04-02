import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import contact from "../assets/contact.jpg";
import federation from "../assets/federation.png";
import mail from "../assets/mail.png";
import ancre from "../assets/ancre.png";
import monde from "../assets/monde.png";

function Contact({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <h5>{langue ? "Nous joindre :" : "Kontakt anou"}</h5>
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
      </section>
    </main>
  );
}

export default Contact;
