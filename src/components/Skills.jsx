import React from 'react';
import { Row, Col, Card, Progress, Typography, Space } from 'antd';
import { motion } from 'framer-motion';
import { 
  Html5Filled, 
  DotChartOutlined, 
  CodeFilled, 
  AntDesignOutlined,
  ThunderboltFilled
} from '@ant-design/icons';

const { Title, Text } = Typography;

const skills = [
  { name: "ReactJS & Hooks", level: 85, icon: <CodeFilled />, color: '#61dafb' },
  { name: "JavaScript (ES6+)", level: 80, icon: <DotChartOutlined />, color: '#f7df1e' },
  { name: "Ant Design & UI/UX", level: 90, icon: <AntDesignOutlined />, color: '#1890ff' },
  { name: "HTML5 & CSS3", level: 95, icon: <Html5Filled />, color: '#e34f26' },
  { name: "State Management", level: 75, icon: <ThunderboltFilled />, color: '#722ed1' },
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Title level={2} style={styles.sectionTitle}>KỸ NĂNG CHUYÊN MÔN</Title>
          <div style={styles.underline}></div>
        </motion.div>

        <Row gutter={[24, 24]}>
          {skills.map((skill, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card style={styles.skillCard} bordered={false}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ ...styles.iconWrapper, color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div style={{ flex: 1, marginLeft: '15px' }}>
                      <div style={{ display: 'flex', justifySelf: 'space-between', width: '100%' }}>
                        <Text strong style={{ color: '#fff', fontSize: '16px' }}>{skill.name}</Text>
                        <Text style={{ color: skill.color, marginLeft: 'auto' }}>{skill.level}%</Text>
                      </div>
                    </div>
                  </div>
                  
                  <Progress 
                    percent={skill.level} 
                    showInfo={false} 
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': skill.color,
                    }}
                    trailColor="rgba(255,255,255,0.05)"
                    strokeWidth={8}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bonus: Tech Stack badges */}
        <motion.div 
          style={styles.techStackContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Space wrap size="middle" style={{ justifyContent: 'center', width: '100%' }}>
            {['Git', 'Node.js', 'Express', 'MongoDB', 'Responsive Design', 'RESTful API'].map(tag => (
              <span key={tag} style={styles.tag}>{tag}</span>
            ))}
          </Space>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#0a0a0a',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: '36px',
    fontWeight: '800',
  },
  underline: {
    width: '50px',
    height: '4px',
    background: 'linear-gradient(90deg, #1890ff, #00f2fe)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  skillCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '10px',
    transition: 'all 0.3s ease',
  },
  iconWrapper: {
    fontSize: '24px',
    background: 'rgba(255, 255, 255, 0.03)',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  },
  techStackContainer: {
    marginTop: '60px',
    textAlign: 'center',
  },
  tag: {
    padding: '8px 20px',
    background: '#111',
    color: 'rgba(255,255,255,0.6)',
    borderRadius: '100px',
    border: '1px solid #222',
    fontSize: '14px',
  }
};

export default Skills;