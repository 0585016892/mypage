import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Row, Col, message } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    
    // Chuẩn bị dữ liệu cho EmailJS
    const templateParams = {
      name: values.name,
      user_email: values.user_email,
      message: values.message,
    };

    emailjs.send(
      'service_7v079sf',
      'template_zuq6bv6',
      templateParams,
      'n6o9BTtmuk-RKP6gv'
    ).then(
      () => {
        message.success({
          content: 'Tin nhắn đã được gửi thành công!',
          style: { marginTop: '10vh' },
        });
        form.resetFields();
        setLoading(false);
      },
      (error) => {
        message.error('Gửi thất bại, vui lòng thử lại sau.');
        console.log('FAILED...', error);
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <Title level={2} style={styles.sectionTitle}>LIÊN HỆ</Title>
          <div style={styles.underline}></div>
          <Text style={styles.subText}>Bạn có ý tưởng dự án? Hãy để lại lời nhắn cho mình nhé!</Text>
        </motion.div>

        <Row justify="center">
          <Col xs={24} md={16} lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card style={styles.contactCard} bordered={false}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    label={<span style={styles.label}>Tên của bạn</span>}
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                  >
                    <Input 
                      prefix={<UserOutlined style={styles.icon} />} 
                      placeholder="Nhập tên" 
                      style={styles.input}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<span style={styles.label}>Email liên hệ</span>}
                    name="user_email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email!' },
                      { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                  >
                    <Input 
                      prefix={<MailOutlined style={styles.icon} />} 
                      placeholder="example@gmail.com" 
                      style={styles.input}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<span style={styles.label}>Nội dung tin nhắn</span>}
                    name="message"
                    rules={[{ required: true, message: 'Vui lòng nhập tin nhắn!' }]}
                  >
                    <TextArea 
                      prefix={<MessageOutlined />}
                      rows={5} 
                      placeholder="Tôi có thể giúp gì cho bạn?" 
                      style={styles.input}
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      icon={<SendOutlined />} 
                      loading={loading}
                      style={styles.submitBtn}
                      block
                    >
                      Gửi Tin Nhắn
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#0a0a0a',
    minHeight: '90vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '8px',
  },
  underline: {
    width: '50px',
    height: '4px',
    background: '#1890ff',
    margin: '0 auto 15px',
    borderRadius: '2px',
  },
  subText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '16px',
  },
  contactCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '20px',
  },
  label: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: 500,
  },
  input: {
    background: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid #333',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 12px',
  },
  icon: {
    color: '#1890ff',
  },
  submitBtn: {
    height: '50px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    marginTop: '10px',
    background: '#1890ff',
    border: 'none',
    boxShadow: '0 4px 15px rgba(24, 144, 255, 0.2)',
  }
};

export default Contact;