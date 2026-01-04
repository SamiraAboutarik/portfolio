import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Styles AOS
import Navbar from './components/Navbar';
import Home from './routes/Home';
import ProjectsPage from './routes/ProjectsPage';
import ContactPage from './routes/ContactPage';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Scroll from './components/Scroll';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialisation AOS
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className="App">
        <Loader />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="main-content">        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </div>
        <Cursor />

         <Scroll />
      </div>
    </Router>
  );
}

export default App;