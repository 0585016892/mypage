import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer-section text-center text-white py-4">
    <Container>
      <p className="mb-0">&copy; {new Date().getFullYear()} HUNG Portfolio. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
