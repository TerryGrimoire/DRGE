import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Actions({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Actions </title>
        <link rel="canonical" href={`${helmet.href}/Actions`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Actions;
