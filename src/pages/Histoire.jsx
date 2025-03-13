import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Histoire({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Histoire </title>
        <link rel="canonical" href={`${helmet.href}/Histoire`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Histoire;
