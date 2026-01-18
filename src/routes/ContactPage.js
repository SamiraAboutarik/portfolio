import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // ✅ EmailJS Configuration
    const serviceID = "service_portfolio"; 
    const templateID = "template_portfolio"; 
    const publicKey = "INQA71_HFdQwLpIIS"; 

    // ✅ Get form data
    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // ✅ Send via EmailJS
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: data,
      }),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        setLoading(false);
        setStatus("error");
        console.error("Error:", error);
      });
  };

  return (
    <section className="contact-section-pro py-5">
      <div className="container">
        {/* ✅ TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6" data-aos="zoom-in">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted mt-2">
            Let's work together and build something amazing
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
                  <p className="text-muted mb-0">+212 6 41 32 22 97</p>
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
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="from_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  {/* ✅ Status Messages */}
                  {status === "success" && (
                    <div className="col-12">
                      <div className="alert alert-secondary">
                        <span className="text-success">✅ Message sent successfully!</span>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="col-12">
                      <div className="alert alert-danger">
                        ❌ Failed to send message. Please try again.
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gradient w-100"
                      style={{ marginLeft: "10px" }}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
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