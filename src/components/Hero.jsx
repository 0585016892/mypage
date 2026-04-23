import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Space, Typography } from 'antd';
import { 
  FacebookFilled, 
  InstagramOutlined, 
  LinkedinFilled, 
  PhoneOutlined,
  GithubFilled 
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
// Import lại Navbar của bạn ở đây
import Navbar from './NavbarComponent'; 
import user from '../assets/a.png';

const { Title, Paragraph, Text } = Typography;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const roles = ["Frontend Developer","React Specialist"];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section style={styles.section}>
      {/* TRẢ LẠI HEADER CHO BẠN Ở ĐÂY */}
      <div style={styles.navWrapper}>
        <Navbar />
      </div>

      <div style={styles.container}>
        <Row align="middle" gutter={[40, 40]}>
          <Col xs={24} md={14}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text style={styles.greeting}>XIN CHÀO, TÔI LÀ</Text>
              <Title level={1} style={styles.name}>
                Trần Khánh Hưng
              </Title>
              
              <div style={styles.typewriterWrapper}>
                <Text style={styles.roleText}>Một </Text>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    style={styles.highlightText}
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <Paragraph style={styles.description}>
                Tôi xây dựng các ứng dụng web hiện đại, tập trung vào trải nghiệm người dùng
                và hiệu suất hệ thống. Chuyên gia triển khai các giải pháp với ReactJS.
              </Paragraph>

              <Space size="large" style={{ marginBottom: 32 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<PhoneOutlined />} 
                    href="tel:+84587142011"
                    style={styles.primaryBtn}
                  >
                    Liên hệ ngay
                  </Button>
                </motion.div>
                
                <Space size="middle">
                  {[
                    { icon: <FacebookFilled />, link: "https://www.facebook.com/tran.khanh.hung.770881/" },
                    { icon: <InstagramOutlined />, link: "https://www.instagram.com/_hung_lucky/" },
                    { icon: <LinkedinFilled />, link: "#" },
                    { icon: <GithubFilled />, link: "#" }
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      whileHover={{ y: -5, color: '#1890ff' }}
                      style={styles.socialIcon}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </Space>
              </Space>
            </motion.div>
          </Col>

          <Col xs={24} md={10} style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={styles.imageWrapper}
            >
              <div style={styles.blob}>
                <img src={user} alt="Avatar" style={styles.profileImg} />
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column', // Đổi sang column để Navbar nằm trên cùng
    justifyContent: 'center',
    background: '#0a0a0a', 
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  navWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    // Nếu Navbar của bạn không có nền, bạn có thể thêm backdrop-filter ở đây
    background: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 20px 40px', // Thêm padding-top để không bị Navbar đè lên
    width: '100%',
  },
  greeting: {
    color: '#1890ff',
    fontWeight: 600,
    letterSpacing: '2px',
    fontSize: '14px',
  },
  name: {
    color: '#fff',
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    margin: '8px 0',
    fontWeight: 850,
  },
  typewriterWrapper: {
    fontSize: '22px',
    marginBottom: '24px',
    height: '35px',
  },
  roleText: {
    color: 'rgba(255,255,255,0.7)',
  },
  highlightText: {
    color: '#1890ff',
    fontWeight: 'bold',
  },
  description: {
    color: '#999',
    fontSize: '17px',
    lineHeight: '1.8',
    maxWidth: '520px',
    marginBottom: '40px',
  },
  primaryBtn: {
    height: '48px',
    padding: '0 25px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 600,
    boxShadow: '0 8px 20px rgba(24, 144, 255, 0.2)',
  },
  socialIcon: {
    fontSize: '22px',
    color: 'rgba(255,255,255,0.6)',
    transition: 'all 0.3s ease',
  },
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  blob: {
    width: 'min(380px, 80vw)',
    height: 'min(380px, 80vw)',
    background: 'linear-gradient(135deg, #1890ff 0%, #001529 100%)',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    animation: 'morph 8s ease-in-out infinite',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  profileImg: {
    width: '105%',
    height: '105%',
    objectFit: 'cover',
  },
};

export default Hero;