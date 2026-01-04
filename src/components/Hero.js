import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="hero-section-pro py-5" data-aos="fade-in">
      <Container>
        <Row className="align-items-center gy-5">

          {/* ✅ TEXT SIDE */}
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm{" "}
              <span className="text-gradient">Samira Aboutarik</span>
            </h1>

            <h2 className="typing-text-pro mb-4">{text}</h2>

            <p className="lead text-muted mb-4">
              I build modern, scalable, and high-performance web applications
              with passion and creativity.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button
                className="btn-gradient px-4 py-2"
                as="a"
                href="/images/CV.pdf"
                download="Samira_Aboutarik_CV.pdf"
              >
                Download CV
              </Button>

              <Button
                variant="outline-dark"
                className="px-4 py-2 btn-contact"
                as={Link}
                to="/contact"
              >
                Hire Me
              </Button>
            </div>
          </Col>

          {/* ✅ IMAGE SIDE */}
          <Col lg={6} className="text-center">
            <div className="hero-img-wrapper mx-auto">
              <img
                src="/images/mypicture.jpg"
                alt="Hero"
                className="img-fluid hero-img"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
