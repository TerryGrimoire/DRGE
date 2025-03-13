/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import actions from "../data/actionsFR";
import chiffres from "../data/chiffresFR";
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
          <h4>Aidez un étudiant réunionnais à réussir ses études</h4>
          <p>
            Chaque don compte pour financer nos actions et permettre à nos
            bénéficiaires de continuer leurs études. Les donations permettent
            non seulement de financer des bourses d'installations mais également
            à notre association de rémunérer des intervenants exterieurs lors de
            nos sessions de formation.
          </p>
          <div className="CTA_container">
            <Link to="/Actions">
              <button type="button">
                <p>En savoir plus</p>{" "}
                <img src={fleche2} alt="fleche" className="fleche" />
              </button>
            </Link>
            <a
              hreref="https://www.helloasso.com/associations/la-reunion-aux-grandes-ecoles/formulaires/1"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">
                <p>Faire un don</p>
                <img src={fleche} alt="fleche" className="fleche" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="chiffres">
        <h2>Quelques chiffres</h2>
        <div>
          {chiffres.map((chiffre) => (
            <div>
              <h5>{chiffre.titre}</h5> <p>{chiffre.texte}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home_actions">
        <h2>Nos actions</h2>
        <div>
          {actions.map((action) => (
            <div>
              <img src={action.img} alt={action.alt} />
              <h5>{action.titre}</h5>
              <p>{action.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
