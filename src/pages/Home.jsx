import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import video from "../assets/video2.mp4";
import logo from "../assets/logo3.png";
import fleche from "../assets/fleche.png";
import fleche2 from "../assets/fleche2.png";

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
    </main>
  );
}
