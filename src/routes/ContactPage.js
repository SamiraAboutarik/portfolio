import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section-pro py-5">
      <div className="container">

        {/* ✅ TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6" data-aos="zoom-in">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted mt-2">
            Let’s work together and build something amazing
          </p>
        </div>

        <div className="row g-4">

          {/* ✅ LEFT INFO */}
          <div className="col-lg-5">
            <div className="contact-info-pro p-4 h-100">

              <h4 className="fw-bold mb-4">Get In Touch</h4>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="ms-3">
                  <p className="mb-1 fw-semibold">Email</p>
                  <p className="text-muted mb-0">
                    samiraaboutarik45@gmail.com
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="ms-3">
                  <p className="mb-1 fw-semibold">Phone</p>
                  <p className="text-muted mb-0">+212 6 00 00 00 00</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="ms-3">
                  <p className="mb-1 fw-semibold">Location</p>
                  <p className="text-muted mb-0">Agadir, Morocco</p>
                </div>
              </div>

            </div>
          </div>

          {/* ✅ RIGHT FORM */}
          <div className="col-lg-7">
            <div className="contact-form-pro p-4 h-100">

              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-gradient w-100">
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
