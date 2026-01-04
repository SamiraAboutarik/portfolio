import React from "react";
import skillsData from "../data/skills.json";

export default function Skills() {
  return (
    <div className="skills-section container py-5">
      <h2 className="text-center title" data-aos="zoom-in">
        My <span className="text-gradient">Skills</span>
      </h2>

      <p className="text-center text-muted mb-5">
        Technologies and tools I use to bring ideas to life
      </p>

      <div className="row g-4">
        {skillsData.map((group, index) => (
          <div className="col-md-4" key={index}>
            <div className="skill-card p-4 h-100">
              <h4 className="skill-title text-center mb-4">
                {group.category}
              </h4>

              {group.skills?.map((skill, i) => (
                <div key={i} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>

                  <div className="progress-bar mt-2">
                    <div style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
