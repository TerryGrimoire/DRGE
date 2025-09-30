import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import Action from "./pages/Action";
import Erreur404 from "./pages/Error404";
import Association from "./pages/Association";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import globe from "./assets/globe.png";

import "./App.css";

function App() {
  const helmet = {
    title: "De La Réunion aux grandes écoles",
    href: "https://delareunionauxgrandesecoles.fr",
  };

  const [langue, setLangue] = useState(true);
  const [bandeau, setBandeau] = useState(true);
  return (
    <BrowserRouter>
      <Header helmet={helmet} langue={langue} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} langue={langue} />} />
        <Route
          path="/Actions"
          element={<Actions helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Actions/:id"
          element={<Action helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Association"
          element={<Association helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Contact"
          element={<Contact helmet={helmet} langue={langue} />}
        />
        <Route
          path="/404"
          element={<Erreur404 helmet={helmet} langue={langue} />}
        />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer langue={langue} />
      {bandeau && (
        <div className="bandeau">
          <h2>Informations importantes</h2>

          <p>
            Ce site est à usage informatif et n'utilise donc pas de cookie. Nous
            ne collectons aucune donnée personnelle. Pour en savoir plus,
            consultez notre <a href="/mentions">politique de confidentialité</a>
          </p>
          <div>
            <button
              type="button"
              className="button_style button_white_blue shad"
              onClick={() => setBandeau(false)}
            >
              Tout accepter
            </button>
            <button
              type="button"
              className="button_style"
              onClick={() => setBandeau(false)}
            >
              Tout refuser
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setLangue(!langue)}
        className="langue"
      >
        {" "}
        <img src={globe} alt="icone du globe" />{" "}
        <p>{langue ? "Français" : "Kréol"}</p>
      </button>
    </BrowserRouter>
  );
}

export default App;
