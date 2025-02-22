import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import NavBar from "./Components/Navbar.jsx";
import About from "./Routes/About.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
