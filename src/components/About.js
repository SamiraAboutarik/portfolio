import React from "react";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { Button } from "react-bootstrap";
export default function About() {
  return (
    <section className="about-section-pro py-5" data-aos="fade-up">
      <div className="container-fluid">

        {/* ✅ TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6" data-aos="zoom-in">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted mt-2">
            Passionate developer crafting modern digital experiences
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* ✅ LEFT CARD */}
          <div className="col-12 col-md-6">
            <div className="about-card-pro h-100 p-4">

              <h4 className="fw-bold mb-3">Full-Stack Developer</h4>

              <p className="text-muted">
                I'm a motivated Junior Full-Stack Developer specializing in React, PHP, and MySQL.
                I enjoy building modern, responsive, and user-friendly web applications.              </p>

              <p className="text-muted">
                As a student in digital development, I focus on writing clean code, creating
                attractive interfaces, and continuously improving my skills through real projects.
              </p>

              {/* ✅ INFO GRID */}
              <div className="row mt-4">
                <div className="col-12 col-sm-6 mb-3">
                  <p className="info-label">Name</p>
                  <p className="fw-semibold">Samira Aboutarik</p>
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <p className="info-label">Email</p>
                  <p className="fw-semibold text-break">samiraaboutarik45@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <p className="info-label">Location</p>
                  <p className="fw-semibold">Morocco, Agadir</p>
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <p className="info-label">Availability</p>
                  <p className="fw-semibold text-success ">Available</p>
                </div>
              </div>

              <Button className="btn gradient-btn w-100 mt-3"
                as="a"
                href="/images/CV.pdf"
                download="Samira_Aboutarik_CV.pdf">
                Download CV
              </Button>

            </div>
          </div>

          {/* ✅ RIGHT TIMELINE */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-3">

              {/* ✅ ITEM 1 */}
              <div className="timeline-card-pro p-4">
                <div className="timeline-icon purple">
                  <FaBriefcase />
                </div>
                <div>
                  <p className="date">2022 - 2023</p>
                  <h5 className="fw-bold">
                    Bachelor's Degree – Physical Sciences
                  </h5>
                  <p className="text-muted small">
                    Completed a scientific high school diploma specializing in
                    Physical Sciences.
                  </p>
                </div>
              </div>

              {/* ✅ ITEM 2 */}
              <div className="timeline-card-pro p-4">
                <div className="timeline-icon pink">
                  <FaUser />
                </div>
                <div>
                  <p className="date">2024 – Present</p>
                  <h5 className="fw-bold">
                    Digital Development Student
                  </h5>
                  <p className="text-muted small">
                    Currently studying as a Specialized Technician in Digital
                    Development at OFPPT Ait Melloul. Expected graduation: June
                    2026.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
