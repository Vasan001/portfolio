import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
