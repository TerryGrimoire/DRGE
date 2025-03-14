/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import papa from "papaparse";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import actions from "../data/actionsFR";
import missions from "../data/missionsFR";

import video from "../assets/video2.mp4";
import logo from "../assets/logo3.png";
import fleche from "../assets/fleche.png";
import fleche2 from "../assets/fleche2.png";
import presentation from "../assets/presentation.jpg";
import bourse from "../assets/bourses.jpg";

export default function Home({ helmet }) {
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
          <h1 className="typing_effect">Informer, accompagner, fédérer</h1>
          <div className="CTA_container">
            <Link to="/Actions">
              <button type="button">
                <p>Découvrir nos actions</p>{" "}
                <img src={fleche2} alt="fleche" className="fleche" />
              </button>
            </Link>
            <Link to="/Contact">
              <button type="button">
                <p>Nous soutenir</p>
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
          <h3>Qui sommes nous ? </h3>
          <p>
            Notre île rayonne par les compétences et le dynamisme de notre
            jeunesse. Pourtant, cette jeunesse est souvent délaissée et n'a pas
            toutes les clés en main pour penser de la meilleure manière possible
            son cursus d'étudiant et son parcours professionnel. De La Réunion
            Aux Grandes Ecoles existe donc dans le but d'accompagner cette
            jeunesse par l'expérience des actuels étudiants et professionnels.
          </p>
          <p>
            Elle a également pour but de rendre plus facile cette transition du
            lycée vers l'enseignement supérieur en leur donnant un maximum de
            réponses à travers différentes ressources accessibles sur de
            multiples plateformes.
          </p>
        </div>
      </section>
      <section className="home_missions">
        <h2>Nos missions principales</h2>
        <div>
          {missions.map((mission) => (
            <div>
              <img src={mission.img} alt={mission.alt} />
              <h5>{mission.titre}</h5> <p>{mission.texte}</p>
              <Link to="/Actions">En savoir plus</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="home_bourse">
        <img src={bourse} alt="effets scolaires eparpillés" />
        <div className="veil" />
        <div className="home_bourse_content">
          <h4>Vous êtes étudiant et souhaitez un accompagnement ?</h4>
          <p>
            Nous pouvons vous aider à trouver dans chaque étape de votre
            parcours académique. Que ce soit dans le choix de l'orientation, la
            préparation à un concours pour intégrer une école ou encore grâce à
            notre programme de bourses d'études pour vous aider dans votre
            installation en dehors du territoire réunionnais. Pour les étudiants
            souhaitant rentrer au péi, nous pouvons vous aider à trouver un
            stage grâce à notre réseau de partenaires.{" "}
          </p>
          <div className="CTA_container">
            <Link to="/Actions">
              <button type="button">
                <p>En savoir plus</p>{" "}
                <img src={fleche2} alt="fleche" className="fleche" />
              </button>
            </Link>
            <Link to="/Contact">
              <button type="button">
                <p>Nous contacter</p>
                <img src={fleche} alt="fleche" className="fleche" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="home_chiffres">
        <h4>
          De La Réunion aux grandes écoles accompagne les étudiants réunionnais
          vers la réussite académique et professionnelle depuis 2019.
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
        <h2>Nos différentes actions</h2>
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
                <Link to="/Actions">En savoir plus</Link>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
