import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { UserOutlined, CodeOutlined, RocketOutlined } from "@ant-design/icons";
import { useTheme } from "../contexts/ThemeContext"; // Import hook từ ThemeContext của bạn

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const { theme } = useTheme(); // Lấy trạng thái theme hiện tại ('light' hoặc 'dark')
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      style={{
        ...styles.section,
        background: isDark ? "#050505" : "#f9f9f9", // Nền đổi động
      }}
    >
      <div style={styles.container}>
        {/* Tiêu đề Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <Title
            level={2}
            style={{ ...styles.sectionTitle, color: isDark ? "#fff" : "#111" }}
          >
            VỀ TÔI
          </Title>
          <div style={styles.underline}></div>
        </motion.div>

        <Row gutter={[40, 40]} align="middle">
          {/* Cột trái: Khối thông tin giới thiệu chính */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                style={{
                  ...styles.glassCard,
                  background: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.02)",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.06)",
                  boxShadow: isDark
                    ? "0 10px 30px rgba(0,0,0,0.5)"
                    : "0 10px 30px rgba(0,0,0,0.03)",
                }}
                bordered={false}
              >
                <Title
                  level={3}
                  style={{
                    color: "#1890ff",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <UserOutlined /> Xin chào, mình là Hưng
                </Title>
                <Paragraph
                  style={{
                    ...styles.text,
                    color: isDark ? "rgba(255,255,255,0.75)" : "#444",
                  }}
                >
                  Mình là một{" "}
                  <Text strong style={{ color: isDark ? "#fff" : "#111" }}>
                    Frontend Developer
                  </Text>{" "}
                  với niềm đam mê xây dựng những sản phẩm công nghệ thực tế.
                  Hiện tại, mình tập trung chuyên sâu vào hệ sinh thái{" "}
                  <Text
                    code
                    style={{
                      ...styles.code,
                      background: isDark ? "#1a1a1a" : "#eaeaea",
                      color: "#1890ff",
                    }}
                  >
                    ReactJS
                  </Text>{" "}
                  và{" "}
                  <Text
                    code
                    style={{
                      ...styles.code,
                      background: isDark ? "#1a1a1a" : "#eaeaea",
                      color: "#1890ff",
                    }}
                  >
                    Ant Design
                  </Text>
                  .
                </Paragraph>
                <Paragraph
                  style={{
                    ...styles.text,
                    color: isDark ? "rgba(255,255,255,0.75)" : "#444",
                  }}
                >
                  Thế mạnh của mình là biến những ý tưởng phức tạp thành giao
                  diện trực quan, tinh tế nhưng vẫn giữ được hiệu suất tối ưu.
                  Mình đã tích lũy kinh nghiệm thực chiến thông qua các dự án
                  E-learning và quản lý bán hàng.
                </Paragraph>

                <Divider
                  style={{
                    borderColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  }}
                />

                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Text
                      style={{
                        ...styles.label,
                        color: isDark ? "#fff" : "#111",
                      }}
                    >
                      <RocketOutlined /> Tốc độ:
                    </Text>
                    <div
                      style={{
                        ...styles.subText,
                        color: isDark ? "rgba(255,255,255,0.45)" : "#777",
                      }}
                    >
                      Tối ưu hóa Performance & SEO
                    </div>
                  </Col>
                  <Col span={12}>
                    <Text
                      style={{
                        ...styles.label,
                        color: isDark ? "#fff" : "#111",
                      }}
                    >
                      <CodeOutlined /> Tư duy:
                    </Text>
                    <div
                      style={{
                        ...styles.subText,
                        color: isDark ? "rgba(255,255,255,0.45)" : "#777",
                      }}
                    >
                      Clean Code & Reusable Component
                    </div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>

          {/* Cột phải: Khối các số liệu / Facts nổi bật */}
          <Col xs={24} lg={12}>
            <div style={styles.statsContainer}>
              {[
                {
                  label: "Dự án đã tham gia",
                  value: "10+",
                  color: "#1890ff",
                  border: "#1890ff",
                },
                {
                  label: "Công nghệ sử dụng",
                  value: "React, Node, AntD",
                  color: "#722ed1",
                  border: "#722ed1",
                },
                {
                  label: "Phong cách thiết kế",
                  value: "Minimalism / Modern",
                  color: "#ff4d4f",
                  border: "#ff4d4f",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ x: 8 }}
                  style={{
                    ...styles.statItem,
                    background: isDark
                      ? "rgba(255, 255, 255, 0.02)"
                      : "rgba(255, 255, 255, 1)",
                    boxShadow: isDark ? "none" : "0 8px 24px rgba(0,0,0,0.04)",
                    borderLeft: `4px solid ${stat.border}`,
                    borderTop: isDark ? "none" : "1px solid #f0f0f0",
                    borderRight: isDark ? "none" : "1px solid #f0f0f0",
                    borderBottom: isDark ? "none" : "1px solid #f0f0f0",
                  }}
                >
                  <Text
                    style={{
                      color: isDark ? "rgba(255,255,255,0.5)" : "#666",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Text>
                  <div
                    style={{
                      color: stat.color,
                      fontSize: "26px",
                      fontWeight: "800",
                      marginTop: "6px",
                    }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

// Kiểu dáng Premium hỗ trợ linh hoạt Light/Dark mode
const styles = {
  section: {
    padding: "120px 0",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    transition: "background 0.4s ease",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
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
    background: "linear-gradient(90deg, #1890ff, #69c0ff)",
    margin: "16px auto 0",
    borderRadius: "4px",
  },
  glassCard: {
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "24px",
    padding: "12px",
    transition: "all 0.4s ease",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    transition: "color 0.4s ease",
  },
  code: {
    border: "none",
    borderRadius: "6px",
    padding: "2px 6px",
    fontFamily: "monospace",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "6px",
    fontWeight: "600",
    fontSize: "15px",
    transition: "color 0.4s ease",
  },
  subText: {
    fontSize: "13px",
    transition: "color 0.4s ease",
  },
  statsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  statItem: {
    padding: "24px 28px",
    borderRadius: "20px",
    transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
  },
};

export default About;
