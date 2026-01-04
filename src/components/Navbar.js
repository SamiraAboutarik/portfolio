import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [active, setActive] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  // Effet pour le scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${darkMode ? "dark-mode-nav" : "light-mode-nav"} ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container-fluid">
        {/* ✅ LOGO */}
        <Link to="/" className="navbar-brand fw-bold ms-2 ms-lg-4">
          &lt;SA<span className="gradient-text">MIRA</span> /&gt;
        </Link>

        {/* ✅ BOUTON HAMBURGER POUR MOBILE */}
        <button
          className="navbar-toggler me-2 me-lg-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${darkMode ? "dark-toggler" : ""}`}></span>
        </button>

        {/* ✅ CONTENU DU MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center px-3 px-lg-0">
            {/* ✅ LIENS DE NAVIGATION */}
            <Link
              to="/"
              className={`nav-link mx-2 mx-lg-3 position-relative ${active === "/" ? "active-nav" : ""}`}
            >
              <span>Home</span>
              {active === "/" && <span className="nav-indicator"></span>}
            </Link>

            <Link
              to="/projects"
              className={`nav-link mx-2 mx-lg-3 position-relative ${active === "/projects" ? "active-nav" : ""}`}
            >
              <span>Projects</span>
              {active === "/projects" && <span className="nav-indicator"></span>}
            </Link>

            <Link
              to="/contact"
              className={`nav-link mx-2 mx-lg-3 position-relative ${active === "/contact" ? "active-nav" : ""}`}
            >
              <span>Contact</span>
              {active === "/contact" && <span className="nav-indicator"></span>}
            </Link>

            {/* ✅ DARK MODE BUTTON */}
            <div className="nav-divider d-none d-lg-block"></div>
            
            <button
              className={`theme-btn-nav mx-2 mx-lg-3 ${darkMode ? "dark" : "light"}`}
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}