import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  // Initializes AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     // Only animate once when scrolling
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
