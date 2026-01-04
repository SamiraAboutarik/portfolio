🌌 Portfolio React – Version Bootstrap 5 (Premium)

<p align="center"> <img src="https://img.shields.io/github/license/votre-username/portfolio-bootstrap?style=for-the-badge&color=7c3aed" /> <img src="https://img.shields.io/github/stars/votre-username/portfolio-bootstrap?style=for-the-badge&color=ec4899" /> <img src="https://img.shields.io/github/forks/votre-username/portfolio-bootstrap?style=for-the-badge&color=a855f7" /> <img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/AOS-Animations-000000?style=for-the-badge&logo=aos&logoColor=white" /> </p>
📸 Aperçu du Portfolio

(Tu pourras remplacer ces images avec de vrais screenshots de ton site)

Home	Projects	Contact

	
	
📑 Table des Matières

✨ Fonctionnalités

🛠 Technologies Utilisées

📦 Installation

🚀 Utilisation

📁 Structure du Projet

🎨 Personnalisation

🐛 Dépannage

🤝 Contribution

📄 Licence

📞 Contact

✨ Fonctionnalités
🎨 Design Premium & Pro

Dégradés violet ► rose

Glassmorphism (flou + transparence)

Hover 3D + Tilt + Parallax

Animations douces (AOS + CSS + GSAP optionnel)

🌙 Mode Sombre Avancé

Toggle avec fade global

Sauvegarde du thème (localStorage)

Bootstrap variables inversées automatiquement

🧩 Composants Interactifs Inclus
Composant	Description
Navbar	Sticky + glass + underline animé
Hero	Typing effect + image flottante
About	Timeline + animations
Skills	Progress bars animées
Services	Icônes interactives + hover glow
Projects	Filtres + overlay + animations
Contact	Formulaire stylisé & responsive
Footer	Icônes animées
Loader	Spinner premium personnalisé
ScrollToTop	Bouton animé
🛠 Technologies Utilisées
<p align="center"> <img src="https://skillicons.dev/icons?i=react,bootstrap,js,vite,figma,git,github,css" /> </p>
📦 Installation
1️⃣ Cloner le projet
git clone https://github.com/votre-username/portfolio-bootstrap.git
cd portfolio-bootstrap

2️⃣ Installer les dépendances
npm install

3️⃣ Installer Bootstrap + AOS
npm install bootstrap bootstrap-icons aos

4️⃣ Importer dans index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";

🚀 Utilisation
Démarrer le serveur
npm start

Build production
npm run build

Tester les features :

Animations AOS ✔

Dark mode ✔

Hover glow, tilt, transitions ✔

ScrollToTop ✔

Loader animé ✔

📁 Structure du Projet
portfolio-bootstrap/
├── public/
├── src/
│   ├── components/
│   ├── routes/
│   ├── data/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

🎨 Personnalisation
🎨 1. Modifier les couleurs globales
:root {
  --primary: #7c3aed;
  --secondary: #ec4899;
  --gradient-main: linear-gradient(135deg, var(--primary), var(--secondary));
}

🌙 2. Mode sombre
body.dark-mode {
  background: #0f0f14;
  color: #ffffff;
  transition: background 0.4s ease, color 0.4s ease;
}

🌀 3. Animation float image
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

🐛 Dépannage
Problème	Solution
AOS ne fonctionne pas	Ajouter AOS.init() dans App.js
Progress bars figées	Activer AOS sur chaque bar
Dark mode clignote	Ajouter transition sur body
Navbar collapse bug	Vérifier import bootstrap.bundle
🤝 Contribution

Fork du projet

Créer une feature :

git checkout -b feature/nom


Commit :

git commit -m "Ajout d'une nouvelle section"


Push & PR

📄 Licence

MIT License — libre d’usage et modification.

📞 Contact

👤 Auteur : Samira Aboutarik
📧 Email : samiraaboutarik45@gmail.com

🔗 LinkedIn : Votre profil
💼 Portfolio Online : (ajoute ici le lien)