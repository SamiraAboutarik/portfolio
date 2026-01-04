import React, { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 9999 }}>
      <div className="loader-container text-center">
        {/* Dev Icons Animation */}
        <div className="dev-icons-wrapper mb-4" style={{ fontSize: '60px', height: '80px', position: 'relative' }}>
          <span className="dev-icon left-bracket" style={{ 
            background: 'linear-gradient(45deg, #b056ff, #ff5dab)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            position: 'absolute',
            left: '0'
          }}>&lt;</span>
          
          <span className="dev-icon slash" style={{ 
            background: 'linear-gradient(45deg, #ff5dab, #b056ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>/</span>
          
          <span className="dev-icon right-bracket" style={{ 
            background: 'linear-gradient(45deg, #b056ff, #ff5dab)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            position: 'absolute',
            right: '0'
          }}>&gt;</span>
        </div>

        <h3 className="text-white mb-2" style={{ 
          background: 'linear-gradient(45deg, #b056ff, #ff5dab)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>Loading...</h3>
        <p className="text-muted small">Preparing your experience</p>
      </div>

      <style jsx>{`
        .loader-overlay {
          backdrop-filter: blur(10px);
          animation: fadeIn 0.5s ease;
        }

        .dev-icons-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          position: relative;
          width: 200px;
          margin: 0 auto;
        }

        .dev-icon {
          animation: bounce 1s ease-in-out infinite;
          display: inline-block;
        }

        .left-bracket {
          animation: bounceLeft 1.5s ease-in-out infinite;
        }

        .slash {
          animation: rotate 2s linear infinite;
        }

        .right-bracket {
          animation: bounceRight 1.5s ease-in-out infinite;
        }

        @keyframes bounceLeft {
          0%, 100% { 
            transform: translateX(0) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateX(-10px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes bounceRight {
          0%, 100% { 
            transform: translateX(0) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateX(10px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes rotate {
          0% { 
            transform: translateX(-50%) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) rotate(180deg) scale(1.3);
          }
          100% { 
            transform: translateX(-50%) rotate(360deg) scale(1);
            opacity: 0.7;
          }
        }

        @keyframes fadeIn { 
          from { opacity: 0; } 
          to { opacity: 1; } 
        }

        /* Glow effect */
        .dev-icon::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(10px);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}