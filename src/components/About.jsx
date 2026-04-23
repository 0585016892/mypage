import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import { motion } from 'framer-motion';
import { UserOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Title level={2} style={styles.sectionTitle}>VỀ TÔI</Title>
          <div style={styles.underline}></div>
        </motion.div>

        <Row gutter={[32, 32]} align="middle">
          {/* Cột trái: Thông tin chính */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card style={styles.glassCard} bordered={false}>
                <Title level={3} style={{ color: '#1890ff', marginBottom: '20px' }}>
                  <UserOutlined /> Xin chào, mình là Hưng
                </Title>
                <Paragraph style={styles.text}>
                  Mình là một <Text strong style={{ color: '#fff' }}>Frontend Developer</Text> với niềm đam mê xây dựng những sản phẩm công nghệ thực tế. Hiện tại, mình tập trung sâu vào hệ sinh thái <Text code style={styles.code}>ReactJS</Text> và <Text code style={styles.code}>Ant Design</Text>.
                </Paragraph>
                <Paragraph style={styles.text}>
                  Thế mạnh của mình là biến những ý tưởng phức tạp thành giao diện đơn giản, tinh tế nhưng vẫn đảm bảo hiệu suất cực cao. Mình đã có kinh nghiệm thực chiến với các dự án quản lý khóa học (E-learning) và hệ thống quản lý bán hàng.
                </Paragraph>
                
                <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Text style={styles.label}><RocketOutlined /> Tốc độ:</Text>
                    <div style={styles.subText}>Tối ưu hóa Performance & SEO</div>
                  </Col>
                  <Col span={12}>
                    <Text style={styles.label}><CodeOutlined /> Tư duy:</Text>
                    <div style={styles.subText}>Clean Code & Reusable Components</div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>

          {/* Cột phải: Các "Fact" nhanh */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={styles.statsContainer}>
                {[
                  { label: 'Dự án đã tham gia', value: '10+', color: '#1890ff' },
                  { label: 'Công nghệ sử dụng', value: 'React, Node, AntD', color: '#722ed1' },
                  { label: 'Phong cách thiết kế', value: 'Minimalism / Dark', color: '#ff4d4f' }
                ].map((stat, i) => (
                  <div key={i} style={styles.statItem}>
                    <Text style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</Text>
                    <div style={{ color: stat.color, fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</div>
                  </div>
                ))}
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
    padding: '100px 0',
    backgroundColor: '#0a0a0a',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: '40px',
    fontWeight: '800',
    marginBottom: '10px',
  },
  underline: {
    width: '60px',
    height: '4px',
    background: '#1890ff',
    margin: '0 auto',
    borderRadius: '2px',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '20px',
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '17px',
    lineHeight: '1.8',
  },
  code: {
    background: '#1a1a1a',
    color: '#1890ff',
    border: '1px solid #333',
  },
  label: {
    color: '#fff',
    display: 'block',
    marginBottom: '4px',
    fontWeight: '600',
  },
  subText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '13px',
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  statItem: {
    background: 'rgba(255, 255, 255, 0.02)',
    padding: '25px',
    borderRadius: '20px',
    borderLeft: '4px solid #1890ff',
    transition: 'transform 0.3s ease',
  },
};

export default About;