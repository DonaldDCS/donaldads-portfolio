import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/AboutSection";
import Projects from "./components/sections/ProjectsSection";
import Contact from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};