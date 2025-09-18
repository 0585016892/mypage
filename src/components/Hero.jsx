import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavbarComponent';
import { motion } from 'framer-motion';
import user from '../assets/a.png'
const Hero = () => {
   const text = "Frontend Developer";
  const speed = 120;
  const pause = 1200;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(handle);
  }, [index, deleting, text]);

  return (
    <section style={{"overflow-y": "hidden"}} className="hero-section d-flex align-items-center justify-content-center">
      <Navbar />
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="text-content">
            <h1 className="display-4">Hello!</h1>
            <h2 className="display-3">Trần Khánh Hưng</h2>
             <h3  className="lead-text hero-typewriter mb-4">I'm a {displayedText}<span className="blinking-cursor">|</span></h3>
            <p className="description-text mb-4">
              I build modern, responsive websites that engage users and drive results
            </p>
            <div className="social-icons mb-4">
              <a href="https://www.facebook.com/tran.khanh.hung.770881/" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/_hung_lucky/" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
            <a href="tel:+84587142011">
              <Button variant="primary" className="download-cv-btn">Call Me</Button>
            </a>
          </Col>
          <Col md={5} className="image-container d-flex justify-content-center">
            <div className="hex-clip-path">
              {/* Thay đổi đường dẫn ảnh của bạn tại đây */}
              <img src={user} alt="John Kendric" className="profile-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;