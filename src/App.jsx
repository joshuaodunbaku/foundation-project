import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import NavBar from "./Components/Navbar.jsx";
import About from "./Routes/About.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Routes/NotFound.jsx";
import Services from "./Routes/Services.jsx";
import Test from "./Routes/Test.jsx";
import Contact from "./Routes/Contact.jsx";
import Events from "./Routes/Events.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="events" element={<Events />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
