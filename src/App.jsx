import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "De La Réunion aux grandes écoles",
    href: "https://delareunionauxgrandesecoles.fr",
  };
  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Actions" element={<Actions helmet={helmet} />} />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
