import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import { useParams } from "react-router-dom";

import fleche from "../assets/fleche.png";
import fleche2 from "../assets/fleche2.png";

function Action({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const { id } = useParams();
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
    fetch(import.meta.env.VITE_ACTIONS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  const actionData = data && data.filter((el) => el.id.includes(id))[0];
  return (
    <main className="action">
      <Helmet>
        <title> {helmet.title} | Actions </title>
        <link rel="canonical" href={`${helmet.href}/Actions`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {actionData ? (
        <section className="action_content">
          <section className="actions_top">
            <h1>{actionData.titre}</h1>
            <img src={actionData.image} alt="" />
            <div className="veil" />
          </section>
          <section className="description">
            <p>{actionData.eligibilite}</p>
          </section>
          <h3>
            {actionData.titre} <span>en détails</span>
          </h3>
          <section className="description">
            <p>{actionData.description}</p>
          </section>
          <div className="galerie">
            {actionData.galerie.split(";").map((el) => (
              <img
                src={el}
                alt="galerie illutrant les actions de LA Réunion aux grandes écoles"
              />
            ))}
          </div>

          <h3>Les objectifs</h3>
          <ul className="objectifs">
            {actionData.objectifs.split(";").map((el) => (
              <li>
                <img src={fleche2} alt="fleche" />
                <p>
                  <span>{el.split(":")[0]}</span> {el.split(":")[1]}
                </p>
              </li>
            ))}
          </ul>
          <h3>Les avantages</h3>
          <section className="avantages">
            <div>
              <h5>{actionData.avantages1.split(":")[0]}</h5>
              <ul>
                {actionData.avantages1
                  .split(":")[1]
                  .split(";")
                  .map((el) => (
                    <li>
                      <img src={fleche} alt="fleche" /> <p>{el}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h5>{actionData.avantages2.split(":")[0]}</h5>
              <ul>
                {actionData.avantages2
                  .split(":")[1]
                  .split(";")
                  .map((el) => (
                    <li>
                      <img src={fleche} alt="fleche" /> <p>{el}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          <div className="CTA">
            {actionData.agir
              .split("::")[0]
              .split(";")
              .map((em) => (
                <a href={actionData.agir.split("::")[1]}>
                  <button type="button">{em}</button>
                  <p>{actionData.agir.split("::")[1]}</p>
                </a>
              ))}
          </div>
        </section>
      ) : (
        <p>chargement de la page</p>
      )}
    </main>
  );
}

export default Action;
