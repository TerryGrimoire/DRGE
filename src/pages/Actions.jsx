import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import { Link } from "react-router-dom";
import actions from "../assets/actions.jpg";

function Actions({ helmet }) {
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
    fetch(import.meta.env.VITE_ACTIONS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);
  return (
    <main className="actions">
      <Helmet>
        <title> {helmet.title} | Actions </title>
        <link rel="canonical" href={`${helmet.href}/Actions`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="actions_top">
        <h1>Nos actions</h1>
        <img src={actions} alt="" />
        <div className="veil" />
      </section>
      <section className="actions_content">
        {data.map((action) => (
          <Link to={`/Actions/${action.id}`}>
            {" "}
            <div>
              <img src={action.image} alt={action.titre} />{" "}
              <h5>{action.titre}</h5>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Actions;
