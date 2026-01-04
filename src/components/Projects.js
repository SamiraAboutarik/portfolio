import React from "react";
import projectsData from "../data/projects.json";
import ProductCard from "../components/ProductCard";

export default function Projects({ preview = false }) {
  const displayedProjects = preview
    ? projectsData.slice(0, 3)
    : projectsData;

  return (
    <section className="projects-section container py-5">
      <h2 className="text-center title" data-aos="zoom-in">
        My <span className="text-gradient">Projects</span>
      </h2>

      <p className="text-center text-muted mb-5">
        Some of my recent work
      </p>

      <div className="row g-4">
        {displayedProjects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
