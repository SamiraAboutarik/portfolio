import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";



export default function ProductCard({ project }) {
  return (
    <div className="pro-card">

      {/* ✅ IMAGE + OVERLAY */}
      <div className="pro-image">
        <img src={project.image} alt={project.title} />

        <div className="pro-overlay">
          <a href={project.demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <FaCode />
          </a>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div className="pro-body">
        <span className="pro-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="pro-tech">
          {project.tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
