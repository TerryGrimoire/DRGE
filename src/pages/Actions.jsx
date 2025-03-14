import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import actions from "../assets/actions.jpg";

function Actions({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    </main>
  );
}

export default Actions;
