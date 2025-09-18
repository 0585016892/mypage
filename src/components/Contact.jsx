import React, { useState } from 'react';
import { Container, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7v079sf',
      'template_zuq6bv6',
      e.target,
      'n6o9BTtmuk-RKP6gv'
    ).then(
      (result) => {
        setToastMessage('Tin nhắn đã được gửi thành công!');
        setToastVariant('success');
        setShowToast(true);
        e.target.reset();
      },
      (error) => {
        setToastMessage('Gửi thất bại, vui lòng thử lại.');
        setToastVariant('danger');
        setShowToast(true);
        console.log(error.text);
      }
    );
  };

  return (
    <Container id="contact" className="py-5 contact-section">
      <motion.h2
        className="mb-5 text-center contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Liên Hệ
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contact-form-wrapper"
      >
        <Form className="mx-auto contact-form" style={{ maxWidth: '500px' }} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Tên của bạn</Form.Label>
            <Form.Control type="text" name="name" placeholder="Nhập tên" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="user_email" placeholder="Nhập email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} placeholder="Nhập tin nhắn" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="contact-btn w-100">
            Gửi Tin Nhắn
          </Button>
        </Form>
      </motion.div>

      {/* Toast thông báo */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={4000} 
          autohide
          bg={toastVariant} // success, danger, warning, info
        >
          <Toast.Body className={toastVariant === 'danger' ? 'text-white' : ''}>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Contact;
