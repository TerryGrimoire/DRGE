import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import association from "../assets/association.jpg";
import histoire from "../assets/histoire.jpg";

function Association({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [mots, setMots] = useState([]);
  const [ecoles, setEcoles] = useState([]);

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
    fetch(import.meta.env.VITE_EQUIPE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  const poles = data
    .filter((elo) => elo.pole !== "Présidence")
    .map((el) => {
      return { nom: el.pole, equipe: el.equipe.split(";") };
    });

  const prepareData2 = (data2) => {
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
    setMots(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_MOTS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

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

  const ecolo = ecoles.map((eco) => eco.ecoles);

  return (
    <main className="association">
      <Helmet>
        <title> {helmet.title} | Association </title>
        <link rel="canonical" href={`${helmet.href}/association`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="actions_top">
        <h1>{langue ? "L'association" : "Lasosyasyon"}</h1>
        <img src={association} alt="" />
        <div className="veil" />
      </section>

      <section className="association_content">
        <img
          src={histoire}
          alt="livre pour illustrer l'histoire de De La Réunion aux grandes écoles"
        />
        <article>
          <h2>Notre histoire</h2>
          <p>
            {langue
              ? "Issue de la Fédération Des Territoires aux Grandes Écoles, créé en 2019 par Adèle Hoarau, De La Réunion aux Grandes Écoles repose sur une conviction simple : chaque Réunionnais et Réunionnaise a le potentiel de réussir dans des parcours académiques exigeants. L'éducation, et notamment l'accès aux cursus sélectifs, doit être une opportunité pour tous, indépendamment des origines ou du contexte."
              : "Nou fé parti de La Fédérasyon Dé Téritwar o Grann Zékol, kréé an 2019 par Adèl Waro, De La Rényon o Grann Zékol lé bazé su in konviksyon sinp : sak Rényoné é Réyonèz na lo potansyel de réusi dann bann parkour akadémik ékzijan. Lédukasyon, é surtou laksé a bann kursus séléktif dwa èt in loportunité pou toute domoun, indépandaman de bann zorijin ou kontekst."}
          </p>
          <p>
            {langue
              ? "Nous accompagnons les jeunes de La Réunion dans leur parcours vers les études supérieures, en les aidant à accéder à des formations de qualité et à s'épanouir dans des cursus sélectifs. Grâce à un mentorat personnalisé et un soutien financier, nous leur offrons les outils nécessaires pour réussir et s'engager pleinement dans la construction de leur avenir."
              : "Nou soutyin bann jèn Réyoné dan zot parkour ver lé zétud supérièr. Nou èd bana aksèd bann formasyon de kalité é épanwi azot dan zot kursus séléktif. Gras a nout mantora personnalizé é in soutyin finansyé, nou donn bana bann zouti nesesèr pou réusi é angaz azot dan la konstriksyon de zot lavnir."}
          </p>
          <p>
            {langue
              ? "La Réunion est un terreau riche de talents. Nos jeunes ont soif de s'investir, de créer, et de se réaliser. Nous les guidons pour qu'ils osent franchir les portes des formations les plus exigeantes, afin de se construire un avenir professionnel solide et ambitieux."
              : "La Rényon lé in téro ek in tralé talan. Nou jènès la anvi investi ali, la anvi kréé, é réaliz son bann rèv. Nou gid bana pou ke zot i oz lé formasyon pli ékzijan, pou èd bana konstrwi in lavnir profesyonel solid é ambisye."}
          </p>
        </article>
      </section>
      <section className="mots">
        {mots.map((mot) => (
          <div>
            <img
              src={mot.image}
              alt={`portrait de la présidence de l'association`}
            />
            <article>
              <h4>{mot.titre}</h4>
              <p>{mot.mot}</p>
              <p className="signature">{mot.nom}</p>
            </article>
          </div>
        ))}
      </section>
      <section className="equipe">
        <h3>{langue ? "L'équipe de direction" : "Nout lékip direksyon"}</h3>

        <div className="direction">
          {data.map((membre) => (
            <div>
              {" "}
              <img
                src={membre.photo}
                alt="portrait du membre en question"
              />{" "}
              <div>
                <h5>{membre.nom}</h5> <p>{membre.role}</p>
              </div>
            </div>
          ))}
        </div>
        <h4>
          {langue
            ? "Découvrir les membres des différents pôles"
            : "Dékouv lé manb de nout bann pol"}
        </h4>
        <div className="poles">
          {poles.map((pole) => (
            <div>
              <h5>{pole.nom}</h5>{" "}
              <ul>
                {pole.equipe.map((el) => (
                  <li>
                    <span>{el.split(":")[0]}</span>{" "}
                    <span>{el.split(":")[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="footer_partenaires">
        <h3>
          {langue
            ? "Nos membres sont passés par ces écoles"
            : "Nout manb la pas par zékol la"}
        </h3>
        <div>
          {ecolo.map((ecole) => (
            <img src={ecole} alt={`logo de l'école`} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Association;
