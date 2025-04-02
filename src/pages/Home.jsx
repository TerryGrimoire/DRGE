/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import papa from "papaparse";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import actionsFR from "../data/actionsFR";
import actionsRe from "../data/actionsRE";
import missionsFR from "../data/missionsFR";
import missionsRe from "../data/missionsRE";

import video from "../assets/video2.mp4";
import logo from "../assets/logo3.png";
import fleche from "../assets/fleche.png";
import fleche2 from "../assets/fleche2.png";
import presentation from "../assets/presentation.jpg";
import bourse from "../assets/bourses.jpg";

export default function Home({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Ensure video is loaded and ready to play for autoplay to work reliably
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((error) => {
        console.error("Autoplay was prevented on iOS:", error);
      });
    }
  }, []);

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

  const chiffres = data.map((chiffre) => {
    return {
      numero: chiffre.chiffres,
      commentaire: chiffre.commentaire,
      traduction: chiffre.traduction,
    };
  });
  const missions = langue ? missionsFR : missionsRe;
  const actions = langue ? actionsFR : actionsRe;
  return (
    <main className="home_main">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="home_top">
        <div className="veil" />
        <video
          ref={videoRef}
          src={video} // Replace with your video URL
          autoPlay
          muted
          loop
        />
        <div className="home_top_content">
          <img src={logo} alt="logo de La Réunion aux grandes écoles" />
          <h1 className="typing_effect">
            {langue
              ? "Informer, accompagner, fédérer"
              : "Informé, akonpanyé, fédéré"}
          </h1>
          <div className="CTA_container">
            <Link to="/Actions">
              <button type="button">
                <p>{langue ? "Découvrir nos actions" : "Dékouv nou zaksyon"}</p>{" "}
                <img src={fleche2} alt="fleche" className="fleche" />
              </button>
            </Link>
            <Link to="/Contact">
              <button type="button">
                <p>{langue ? "Nous soutenir" : "Soutyin anou"}</p>
                <img src={fleche} alt="fleche" className="fleche" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home_presentation">
        <img
          src={presentation}
          alt="membres de La Réunion aux grandes écoles et des étudiants boursiers recevant leur bourse de l'association"
        />
        <div>
          <h3>{langue ? "Qui sommes-nous ?" : "Kisa nou lé ?"} </h3>
          <p>
            {langue
              ? "De La Réunion aux Grandes Écoles est bien plus qu'une simple association: c'est un réseau de jeunes Réunionnais·es à travers le monde, unis par l'ambition de transformer leurs rêves en réalité. Nous accompagnons chaque jeune dans la construction de leur parcours académique et professionnel, en leur offrant des ressources pratiques, un mentorat personnalisé, et des réponses concrètes pour réussir leur mobilité vers l'enseignement supérieur. Grâce à notre réseau d'étudiants, de diplômés et de professionnels, nous ouvrons des portes, inspirons et donnons aux jeunes de La Réunion la confiance et les outils pour atteindre l'excellence, ici et au-delà des frontières."
              : "De La Réunion aux Grandes Écoles lé pa solman in lasosyasyon, lé osi un rézo de jen réyoné dan tout lo monn, bana lé uni par zot lanbisyon transform zot rev an réalité. Nou akonpayn sak jen dan la konstruksyon son parkour akadémik é profésyonel ek bann resours pratik, in mantora personalizé é bann répons konkrèt pou zot réusi zot mobilité ver zot zétud supérièr. Ek nout rézo ousa nana dé zétudian, dé diplomé é bann profésyonel, nou rouv la porte, nou inspir é nou donn konfians la jenes La Rényon ek dé zouti pou atenn l'eksélans, isi é an déor bann frontièr."}
          </p>
        </div>
      </section>
      <section className="home_missions">
        <h2>
          {langue ? "Nos missions principales" : "Nout bann misyon prinsipal"}
        </h2>
        <div>
          {missions.map((mission) => (
            <div>
              <img src={mission.img} alt={mission.alt} />
              <h5>{mission.titre}</h5> <p>{mission.texte}</p>
              <Link to={mission.lien}>
                {langue ? "En savoir plus" : "Plis zinfo"}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="home_bourse">
        <img src={bourse} alt="effets scolaires eparpillés" />
        <div className="veil" />
        <div className="home_bourse_content">
          <h4>
            {langue
              ? "Tu es un jeune de La Réunion et tu souhaites être accompagné dans ta mobilité étudiante ?"
              : "Ou lé in jèn La Rényon é ou vé èt akonpanyé dan out mobilité étudyan ? "}
          </h4>
          <p>
            {langue
              ? "Nous pouvons vous aider à trouver dans chaque étape de votre parcours académique. Que ce soit dans le choix de l'orientation, la préparation à un concours pour intégrer une école ou encore grâce à notre programme de bourses d'études pour vous aider dans votre installation en dehors du territoire réunionnais. Pour les étudiants souhaitant rentrer au péi, nous pouvons vous aider à trouver un stage grâce à notre réseau de partenaires."
              : "Nou pé èd aou dan sak létap de out parkour akadémik. I pé èt dan lo shwa ou loriantasyon, èd aou prépar in konkour pou rant dan in lékol ou gras a nout program de bours nou pé èd aou dan out linstalasyon an déor lo teritwar réyoné. Pou bann zétudian i vé rantr o péi, nou pé èd azot trouv in staj gras a nout rézo parténèr."}
          </p>
          <div className="CTA_container">
            <Link to="/Actions/1">
              <button type="button">
                <p>{langue ? "En savoir plus" : "Plis zinfo"}</p>{" "}
                <img src={fleche2} alt="fleche" className="fleche" />
              </button>
            </Link>
            <Link to="/Contact">
              <button type="button">
                <p>{langue ? "Nous contacter" : "Kontakt anou"}</p>
                <img src={fleche} alt="fleche" className="fleche" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home_chiffres">
        <h4>
          {langue
            ? "De La Réunion aux grandes écoles accompagne les étudiants réunionnais vers la réussite académique et professionnelle depuis 2019."
            : "De La Rényon aux grandes écoles i akonpany bann zétudian réyoné ver la réusit akadémik é profésyonel dopwi 2019."}
        </h4>
        <div className="home_chiffres_content">
          {chiffres.map((chiffre) => (
            <div>
              <h5>{chiffre.numero}</h5> <p>{chiffre.commentaire}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home_actions">
        <h2>{langue ? "Nos différentes actions" : "Nout bann zaksyon"}</h2>
        <div>
          {actions.map((action) => (
            <div className="home_actions_content">
              <img src={action.img} alt={action.alt} />
              <article>
                <h5>
                  <span>{action.titre.split(" ")[0]}</span>{" "}
                  {action.titre
                    .split(" ")
                    .filter((el) => el !== action.titre.split(" ")[0])
                    .join(" ")}
                </h5>
                <p> {action.texte} </p>
                {action.lien && (
                  <Link to={action.lien}>
                    {langue ? "En savoir plus" : "Plis zinfo"}
                  </Link>
                )}
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
