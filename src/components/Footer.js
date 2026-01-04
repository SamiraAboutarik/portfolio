import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-pro mt-5">
      <div className="container text-center py-5">

        {/* ✅ LOGO / NAME */}
        <h4 className="fw-bold mb-2">
          Sami <span className="text-gradient">Aboutarik</span>
        </h4>

        {/* ✅ DESCRIPTION */}
        <p className="text-muted small mb-4">
          Full-Stack Developer • React • Laravel • MySQL
        </p>

        {/* ✅ SOCIAL ICONS */}
        <div className="social-neo d-flex justify-content-center gap-3 mb-4">

  <div className="neo-item">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <i className="fab fa-facebook-f"></i>
      <span className="label">Facebook</span>
    </a>
  </div>

  <div className="neo-item">
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <i className="fab fa-twitter"></i>
      <span className="label">Twitter</span>
    </a>
  </div>

  <div className="neo-item">
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <i className="fab fa-instagram"></i>
      <span className="label">Instagram</span>
    </a>
  </div>

  <div className="neo-item">
    <a href="https://github.com/SamiraAboutarik" target="_blank" rel="noreferrer">
      <i className="fab fa-github"></i>
      <span className="label">GitHub</span>
    </a>
  </div>



</div>


        {/* ✅ DIVIDER */}
        <div className="footer-divider mb-3"></div>

        {/* ✅ COPYRIGHT */}
        <p className="small text-muted mb-0">
          © {new Date().getFullYear()} All Rights Reserved | Designed by Samira
        </p>

      </div>
    </footer>
  );
}
