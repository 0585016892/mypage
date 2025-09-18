import React from 'react';
import Slider from "react-slick";
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import b from '../assets/b.png';
import c from '../assets/c.png';

const projects = [
  { title: "Đồ án Tốt nghiệp", desc: "Cửa hàng nhạc cụ Âm sắc Việt", img: c },
  { title: "Đồ án Tốt nghiệp", desc: "Phần mềm quản lý cửa hàng", img: b },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <Container id="projects" className="py-5 projects-section">
      <motion.h2
        className="mb-5 text-center projects-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <Slider {...settings}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="project-card text-center shadow-lg">
              <div className="project-img-wrapper">
                <Card.Img src={p.img} alt={p.title} className="project-img" />
              </div>
              <Card.Body>
                <Card.Title className="project-title">{p.title}</Card.Title>
                <Card.Text className="project-desc">{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Slider>
    </Container>
  );
};

export default Projects;
