import React from "react";

export default function Footer() {
  return (
    <footer className="footer-pro mt-5">
      <div className="container text-center py-5">

        {/* ✅ LOGO / NAME */}
        <h4 className="fw-bold mb-2">
          Samira <span className="text-gradient">Aboutarik</span>
        </h4>

        {/* ✅ DESCRIPTION */}
        <p className="text-muted small mb-4">
          Full-Stack Developer • React • PHP • MySQL
        </p>

        {/* ✅ SOCIAL ICONS */}
        <div className="social-neo d-flex justify-content-center gap-3 mb-4">

  <div className="neo-item">
    <a href="https://www.facebook.com/profile.php?id=100036170468703" target="_blank" rel="noreferrer">
      <i className="fab fa-facebook-f"></i>
      <span className="label">Facebook</span>
    </a>
  </div>

  <div className="neo-item">
    <a href="https://wa.me/212641322297" target="_blank" rel="noreferrer">
      <i className="fab fa-whatsapp"></i>
      <span className="label">WatssApp</span>
    </a>
  </div>


  <div className="neo-item">
    <a href="https://www.instagram.com/s_aboutarik?igsh=bGZ4Z2Z6eHVuYWQ5" target="_blank" rel="noreferrer">
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
    <div className="neo-item">
    <a href="https://www.linkedin.com/in/samira-aboutarik/" target="_blank" rel="noreferrer">
      <i className="fab fa-linkedin"></i>
      <span className="label">LinkedIn</span>
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
