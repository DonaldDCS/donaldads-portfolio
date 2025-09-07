import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/sections/ContactSection";

export default function About() {
  return (
    <>
      <AboutSection 
      text={`I'm Donald ADS, a front-end developer in the making who is passionate about 
        creating beautiful, modular, and functional web applications. I love combining 
        design and technology to build experiences that users enjoy. My goal is to develop 
        solutions that are both scalable and maintainable.`}      
      />
      <ContactSection />
    </>
  );
}