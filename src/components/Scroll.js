import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton après avoir scrollé 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn position-fixed"
          aria-label="Scroll to top"
          style={{
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            background: 'linear-gradient(45deg, #b056ff, #ff5dab)',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(176, 86, 255, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ fontWeight: 'bold' }}>↑</span>
        </button>
      )}

      <style jsx>{`
        .scroll-to-top-btn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .scroll-to-top-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 6px 20px rgba(176, 86, 255, 0.6) !important;
        }

        .scroll-to-top-btn:active {
          transform: translateY(-2px) scale(1.05);
        }

        .scroll-to-top-btn::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #b056ff, #ff5dab);
          border-radius: 50%;
          z-index: -1;
          filter: blur(10px);
          opacity: 0.7;
          animation: pulse 2s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            width: 45px !important;
            height: 45px !important;
            bottom: 20px !important;
            right: 20px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
    </>
  );
}