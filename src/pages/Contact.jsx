import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import contact from "../assets/contact.jpg";

function Contact({ helmet }) {
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
        <h1>Contact</h1>
        <img src={contact} alt="" />
        <div className="veil" />
      </section>
    </main>
  );
}

export default Contact;
