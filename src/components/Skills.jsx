import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "ReactJS", level: 80 },
  { name: "Bootstrap", level: 95 },
];

const Skills = () => (
  <Container id="skills" className="py-5 skills-section">
    <motion.h2
      className="mb-5 text-center skills-title"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      My Skills
    </motion.h2>

    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="mb-4 skill-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className="d-flex justify-content-between mb-1">
          <h5 className="skill-name">{skill.name}</h5>
          <span className="skill-percent">{skill.level}%</span>
        </div>
        <ProgressBar
          now={skill.level}
          className="skill-bar"
          animated
          variant="custom"
        />
      </motion.div>
    ))}
  </Container>
);

export default Skills;
