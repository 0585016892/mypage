import React from 'react';
import { Row, Col, Card, Tag, Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, EyeOutlined, ProjectOutlined } from '@ant-design/icons';
import b from '../assets/b.png';
import c from '../assets/c.png';

const { Title, Paragraph } = Typography;

const projects = [
  { 
    title: "Âm Sắc Việt", 
    category: "Đồ án Tốt nghiệp", 
    desc: "Website thương mại điện tử chuyên doanh nhạc cụ (Piano, Guitar). Tích hợp thanh toán và quản lý giỏ hàng.", 
    img: c,
    tags: ["ReactJS", "Ant Design", "NodeJS"],
    color: "#1890ff",
    github: "https://github.com/yourusername/amsacviet", // Thay link của bạn ở đây
    demo: "https://amsacviet-demo.com"
  },
  { 
    title: "Billiard Management", 
    category: "Productivity", 
    desc: "Hệ thống quản lý quán Bi-a chuyên nghiệp, tính tiền theo giờ, quản lý bàn và doanh thu thời gian thực.", 
    img: b,
    tags: ["Fullstack", "ReactJS", "Express"],
    color: "#52c41a",
    github: "https://github.com/yourusername/billiard-mgmt", // Thay link của bạn ở đây
    demo: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Title level={2} style={styles.sectionTitle}>DỰ ÁN TIÊU BIỂU</Title>
          <div style={styles.underline}></div>
        </motion.div>

        <Row gutter={[32, 32]}>
          {projects.map((p, i) => (
            <Col xs={24} lg={12} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  hoverable 
                  style={styles.projectCard}
                  cover={
                    <div className="project-cover" style={styles.imgWrapper}>
                      <img alt={p.title} src={p.img} style={styles.projectImg} />
                      <div className="project-overlay" style={styles.overlay}>
                        <Button 
                          ghost 
                          icon={<EyeOutlined />} 
                          style={styles.overlayBtn}
                          href={p.demo}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Tag color={p.color} style={{ marginBottom: '12px' }}>{p.category}</Tag>
                  <Title level={4} style={{ color: '#fff', margin: '0 0 12px' }}>{p.title}</Title>
                  <Paragraph style={styles.desc}>{p.desc}</Paragraph>
                  
                  <div style={{ marginBottom: '20px' }}>
                    {p.tags.map(tag => (
                      <Tag key={tag} style={styles.techTag}>{tag}</Tag>
                    ))}
                  </div>

                  <div style={styles.cardFooter}>
                    {/* Cập nhật Link Github ở đây */}
                    <Button 
                      type="link" 
                      icon={<GithubOutlined />} 
                      style={styles.githubBtn}
                      href={p.github}
                      target="_blank" // Mở tab mới
                    >
                      Source Code
                    </Button>
                    <ProjectOutlined style={{ color: '#333' }} />
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#0a0a0a' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  sectionTitle: { color: '#fff', fontSize: '36px', fontWeight: '800' },
  underline: { width: '60px', height: '4px', background: '#1890ff', margin: '0 auto', borderRadius: '2px' },
  projectCard: { background: '#141414', border: '1px solid #222', borderRadius: '20px', overflow: 'hidden' },
  imgWrapper: { height: '240px', overflow: 'hidden', position: 'relative' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: 0, transition: 'opacity 0.3s ease',
  },
  desc: { color: 'rgba(255,255,255,0.6)', fontSize: '15px', height: '65px', overflow: 'hidden' },
  techTag: { background: '#262626', border: 'none', color: '#1890ff', borderRadius: '4px' },
  cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #222', paddingTop: '15px' },
  overlayBtn: { borderRadius: '20px', fontWeight: 600 },
  githubBtn: { color: '#1890ff', padding: 0, fontWeight: 500 }
};

export default Projects;