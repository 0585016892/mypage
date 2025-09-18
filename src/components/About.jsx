import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => (
  <Container id="about" className="py-5">
    {/* Title */}
    <motion.h2
      className="mb-5 text-center"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ fontWeight: '700', fontSize: '2.5rem', letterSpacing: '1px' }}
    >
      About Me
    </motion.h2>

    <Row className="justify-content-center">
      <Col md={8}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            className="p-4 shadow-lg"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
              border: '1px solid #d1d9ff',
            }}
          >
            <Card.Body>
              <Card.Text
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#333',
                }}
              >
                Hello! I'm <span style={{ color: '#1a73e8', fontWeight: '600' }}>Trần Khánh Hưng</span>, a passionate <span style={{ color: '#ff6b6b', fontWeight: '600' }}>Frontend Developer</span>.  
                I specialize in creating <span style={{ color: '#6c5ce7', fontWeight: '500' }}>responsive</span> and <span style={{ color: '#00b894', fontWeight: '500' }}>interactive</span> web applications using <span style={{ color: '#e17055', fontWeight: '500' }}>ReactJS</span> and <span style={{ color: '#0984e3', fontWeight: '500' }}>Bootstrap</span>.  
                I love turning ideas into visually appealing and user-friendly websites.
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Row>
  </Container>
);

export default About;
