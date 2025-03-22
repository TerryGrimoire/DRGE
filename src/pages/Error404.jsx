import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Error({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="error">
      <Helmet>
        <title> {helmet.title} | Error 404 </title>
        <link rel="canonical" href={`${helmet.href}/error`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <h1>Erreur 404</h1>
      <Link to="/">
        {" "}
        <button type="button">Retour à la page d'accueil</button>
      </Link>
    </main>
  );
}

export default Error;
