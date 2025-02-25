import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import NavBar from "./Components/Navbar.jsx";
import About from "./Routes/About.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Routes/NotFound.jsx";
import Services from "./Routes/Services.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
