import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import ProductCard from "../components/ProductCard";

export default function ProjectsPage() {
  const [projects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(p => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  return (
    <section className="projects-section container py-5">
      <h2 className="text-center title" data-aos="zoom-in">
        My <span className="text-gradient">Projects</span>
      </h2>

      <p className="text-center text-muted mb-5">
        All my recent work
      </p>

      {/* ✅ FILTER BUTTONS */}
      <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn ${
              selectedCategory === cat
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ PROJECTS GRID */}
      <div className="row g-4">
        {filteredProjects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
