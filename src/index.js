import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap global
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Pour les composants JS de Bootstrap
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';
import App from './App';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out-cubic",
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);