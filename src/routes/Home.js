import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects preview={true} /> {/* Aperçu de 3 projets */}
      <Footer/>
    </div>
  );
}

export default Home;