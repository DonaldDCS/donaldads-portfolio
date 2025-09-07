import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/AboutSection";
import Projects from "./components/sections/ProjectsSection";
import Contact from "./components/sections/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};