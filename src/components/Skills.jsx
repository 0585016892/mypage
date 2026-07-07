import React from "react";
import { Row, Col, Card, Progress, Typography, Space } from "antd";
import { motion } from "framer-motion";
import {
  Html5Filled,
  DotChartOutlined,
  CodeFilled,
  AntDesignOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { useTheme } from "../contexts/ThemeContext"; // Import hook từ ThemeContext

const { Title, Text } = Typography;

const skills = [
  {
    name: "ReactJS & Hooks",
    level: 85,
    icon: <CodeFilled />,
    color: "#1890ff",
  },
  {
    name: "JavaScript (ES6+)",
    level: 80,
    icon: <DotChartOutlined />,
    color: "#faad14",
  },
  {
    name: "Ant Design & UI/UX",
    level: 90,
    icon: <AntDesignOutlined />,
    color: "#13c2c2",
  },
  { name: "HTML5 & CSS3", level: 95, icon: <Html5Filled />, color: "#ff4d4f" },
  {
    name: "State Management",
    level: 75,
    icon: <ThunderboltFilled />,
    color: "#722ed1",
  },
];

const Skills = () => {
  const { theme } = useTheme(); // Lấy trạng thái theme
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      style={{
        ...styles.section,
        background: isDark ? "#050505" : "#f9f9f9",
      }}
    >
      <div style={styles.container}>
        {/* Tiêu đề Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <Title
            level={2}
            style={{ ...styles.sectionTitle, color: isDark ? "#fff" : "#111" }}
          >
            KỸ NĂNG CHUYÊN MÔN
          </Title>
          <div style={styles.underline}></div>
        </motion.div>

        {/* Danh sách Kỹ năng */}
        <Row gutter={[32, 32]}>
          {skills.map((skill, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card
                  style={{
                    ...styles.skillCard,
                    background: isDark ? "#111111" : "#ffffff",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.06)"
                      : "rgba(0, 0, 0, 0.06)",
                    boxShadow: isDark
                      ? "none"
                      : "0 10px 30px rgba(0, 0, 0, 0.04)",
                  }}
                  bordered={false}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        ...styles.iconWrapper,
                        color: skill.color,
                        background: isDark
                          ? "rgba(255, 255, 255, 0.03)"
                          : "rgba(0, 0, 0, 0.02)",
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div style={{ flex: 1, marginLeft: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Text
                          strong
                          style={{
                            color: isDark ? "#fff" : "#111",
                            fontSize: "16px",
                          }}
                        >
                          {skill.name}
                        </Text>
                        <Text strong style={{ color: skill.color }}>
                          {skill.level}%
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Thanh tiến trình Progress */}
                  <Progress
                    percent={skill.level}
                    showInfo={false}
                    strokeColor={{
                      "0%": "#1890ff",
                      "100%": skill.color,
                    }}
                    trailColor={
                      isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.05)"
                    }
                    strokeWidth={8}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Các Tech Stack phụ dạng Badges */}
        <motion.div
          style={styles.techStackContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Space
            wrap
            size="middle"
            style={{ justifyContent: "center", width: "100%" }}
          >
            {[
              "Git",
              "Node.js",
              "Express",
              "MongoDB",
              "Responsive Design",
              "RESTful API",
            ].map((tag) => (
              <motion.span
                key={tag}
                style={{
                  ...styles.tag,
                  background: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.02)",
                  color: isDark ? "rgba(255, 255, 255, 0.7)" : "#555",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.08)",
                }}
                whileHover={{
                  scale: 1.08,
                  color: "#1890ff",
                  borderColor: "#1890ff",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {tag}
              </motion.span>
            ))}
          </Space>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "120px 0",
    transition: "background 0.4s ease",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 24px",
  },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: "800",
    letterSpacing: "1px",
    margin: 0,
    transition: "color 0.4s ease",
  },
  underline: {
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #1890ff, #00f2fe)",
    margin: "16px auto 0",
    borderRadius: "4px",
  },
  skillCard: {
    borderRadius: "20px",
    padding: "14px",
    border: "1px solid",
    transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
  },
  iconWrapper: {
    fontSize: "22px",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
  },
  techStackContainer: {
    marginTop: "80px",
    textAlign: "center",
  },
  tag: {
    display: "inline-block",
    padding: "8px 22px",
    borderRadius: "100px",
    border: "1px solid",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "default",
    transition: "all 0.2s ease",
  },
};

export default Skills;
