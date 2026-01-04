import React from "react";
import servicesData from "../data/services.json";
import {
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaRedo,
  FaShoppingCart,
  FaLightbulb, FaCheck
} from "react-icons/fa";

const icons = {
  FaCode: <FaCode />,
  FaPaintBrush: <FaPaintBrush />,
  FaDatabase: <FaDatabase />,
  FaRedo: <FaRedo />,
  FaShoppingCart: <FaShoppingCart />,
  FaLightbulb: <FaLightbulb />
};

export default function Services() {
  return (
    <section className="services-section py-5">
      <div className="container">

        {/* ✅ TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6" data-aos="zoom-in">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted mt-2">
            Premium solutions for modern digital products
          </p>
        </div>

        {/* ✅ GRID */}
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card-pro h-100 text-center p-4">

                {/* ✅ ICON */}
                <div className="service-icon-pro mx-auto mb-4">
                  {icons[service.icon]}
                </div>

                <h4 className="fw-bold mb-2">{service.title}</h4>
                <p className="text-muted small mb-3">
                  {service.description}
                </p>

                <ul className="list-unstyled text-start small">
                  {service.features.map((item, i) => (
                    <li key={i} className="mb-2">
                            <FaCheck style={{ color: "linear-gradient(45deg, #b056ff, #ff5dab)", fontSize: "16px" , margin: "5px" }} />
 {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
