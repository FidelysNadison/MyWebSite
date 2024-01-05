import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";


export default function App() {
  return (
    <main className="text-white-400 bg-white body-font">
      <Navbar />
      <About />
      <Parcours />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
