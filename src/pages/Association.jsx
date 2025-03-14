import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import association from "../assets/association.jpg";
import histoire from "../assets/histoire.jpg";

function Association({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <main className="association">
      <Helmet>
        <title> {helmet.title} | Association </title>
        <link rel="canonical" href={`${helmet.href}/association`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="actions_top">
        <h1>L'association</h1>
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
            L'association "De La Réunion aux Grandes Écoles" a été créée en 2019
            par des étudiants réunionnais de grandes écoles. Elle a pour
            objectif de promouvoir l'excellence et la diversité des talents
            réunionnais en hexagone et à La Réunion.
          </p>
          <p>
            L'association "De La Réunion aux Grandes Écoles" a été créée en 2019
            par des étudiants réunionnais de grandes écoles. Elle a pour
            objectif de promouvoir l'excellence et la diversité des talents
            réunionnais en hexagone et à La Réunion. L'association "De La
            Réunion aux Grandes Écoles" a été créée en 2019 par des étudiants
            réunionnais de grandes écoles. Elle a pour objectif de promouvoir
            l'excellence et la diversité des talents réunionnais en hexagone et
            à La Réunion.
          </p>
        </article>
      </section>
      <h2 className="citation">
        <span>"</span>Ce n'est pas parce que les choses sont difficiles que nous
        n'osons pas. C'est parce que nous n'osons pas qu'elles sont difficiles.{" "}
        <span>"</span>
      </h2>
      <span>Sénèque</span>
      <section className="equipe">
        <h3>L'équipe de direction</h3>

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
        <h4>Découvrir les membres des différents pôles</h4>
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
    </main>
  );
}

export default Association;
