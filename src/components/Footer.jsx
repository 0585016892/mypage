import React from 'react';
import { Layout, Space, Typography, Divider } from 'antd';
import { 
  FacebookFilled, 
  InstagramOutlined, 
  LinkedinFilled, 
  GithubFilled,
  HeartFilled 
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter style={styles.footer}>
      <div style={styles.container}>
        {/* Social Icons Section */}
        <Space size="large" style={{ marginBottom: '20px' }}>
          {[
            { icon: <FacebookFilled />, link: "https://www.facebook.com/tran.khanh.hung.770881/" },
            { icon: <InstagramOutlined />, link: "https://www.instagram.com/_hung_lucky/" },
            { icon: <GithubFilled />, link: "https://github.com/0585016892" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#1890ff' }}
              style={styles.socialLink}
            >
              {item.icon}
            </motion.a>
          ))}
        </Space>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.05)', margin: '20px 0' }} />

        {/* Copyright Section */}
        <div style={styles.copyrightBox}>
          <Text style={styles.footerText}>
            © {currentYear} <Text strong style={{ color: '#1890ff' }}>Trần Khánh Hưng</Text>. 
            All rights reserved.
          </Text>
          <br />
          <Text style={styles.madeBy}>
            Made with <HeartFilled style={{ color: '#ff4d4f', fontSize: '12px' }} /> using React & Ant Design
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0a0a0a', // Cùng màu với toàn bộ trang
    padding: '40px 0',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  socialLink: {
    fontSize: '22px',
    color: 'rgba(255, 255, 255, 0.45)',
    transition: 'all 0.3s ease',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.45)',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
  madeBy: {
    color: 'rgba(255, 255, 255, 0.25)',
    fontSize: '12px',
    marginTop: '8px',
    display: 'inline-block',
  },
  copyrightBox: {
    marginTop: '10px',
  }
};

export default Footer;