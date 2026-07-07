import React from "react";
import { Row, Col, Card, Tag, Button, Typography } from "antd";
import { motion } from "framer-motion";
import {
  GithubOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useTheme } from "../contexts/ThemeContext"; // Import hook sử dụng ThemeContext của bạn
import b from "../assets/b.png";
import c from "../assets/c.png";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "Âm Sắc Việt",
    category: "Đồ án Tốt nghiệp",
    desc: "Website thương mại điện tử chuyên doanh nhạc cụ (Piano, Guitar). Tích hợp thanh toán trực tuyến và quản lý giỏ hàng thông minh.",
    img: c,
    tags: ["ReactJS", "Ant Design", "NodeJS"],
    color: "#1890ff",
    github: "https://github.com/0585016892/amsacviet",
    demo: "https://amsacviet.vercel.app/",
  },
  {
    title: "Giáo Xứ Đồng Quan",
    category: "Website",
    desc: "Xây dựng website quản lý và giới thiệu Giáo xứ Đồng Quan với các chức năng tin tức, lịch phụng vụ, thông báo, thư viện ảnh và giao diện responsive trên mọi thiết bị.",
    img: b,
    tags: ["ReactJS", "Express", "MySQL", "Responsive"],
    color: "#52c41a",
    github: "https://github.com/0585016892/giao_ly",
    demo: "giaoxudongquan.site",
  },
];

const Projects = () => {
  const { theme } = useTheme(); // Đọc trạng thái giao diện hệ thống
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      style={{
        ...styles.section,
        background: isDark ? "#050505" : "#f9f9f9", // Thay đổi màu nền tổng thể của section
      }}
    >
      {/* CSS Injection để xử lý hiệu ứng hover mượt mà cho ảnh và overlay */}
      <style>{`
        .project-card-wrapper:hover .project-img {
          transform: scale(1.08);
        }
        .project-card-wrapper:hover .project-overlay {
          opacity: 1 !important;
        }
      `}</style>

      <div style={styles.container}>
        {/* Tiêu đề Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <Title
            level={2}
            style={{ ...styles.sectionTitle, color: isDark ? "#fff" : "#111" }}
          >
            DỰ ÁN TIÊU BIỂU
          </Title>
          <div style={styles.underline}></div>
        </motion.div>

        {/* Danh sách các dự án */}
        <Row gutter={[40, 40]}>
          {projects.map((p, i) => (
            <Col xs={24} lg={12} key={i}>
              <motion.div
                className="project-card-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{
                  y: -12,
                  boxShadow: isDark
                    ? "0 20px 40px rgba(24, 144, 255, 0.15)"
                    : "0 20px 40px rgba(0, 0, 0, 0.08)",
                }}
                style={{ borderRadius: "24px", overflow: "hidden" }}
              >
                <Card
                  bordered={false}
                  style={{
                    ...styles.projectCard,
                    background: isDark ? "#111111" : "#ffffff", // Màu nền của thẻ Card
                    border: isDark
                      ? "1px solid rgba(255, 255, 255, 0.02)"
                      : "1px solid rgba(0, 0, 0, 0.03)",
                  }}
                  bodyStyle={{ padding: "28px" }}
                  cover={
                    <div style={styles.imgWrapper}>
                      <img
                        className="project-img"
                        alt={p.title}
                        src={p.img}
                        style={styles.projectImg}
                      />
                      {/* Lớp phủ Gradient mờ khi hover */}
                      <div className="project-overlay" style={styles.overlay}>
                        <Button
                          type="primary"
                          shape="round"
                          size="large"
                          icon={<EyeOutlined />}
                          style={styles.overlayBtn}
                          href={p.demo}
                          target="_blank"
                        >
                          Xem Demo
                        </Button>
                      </div>
                    </div>
                  }
                >
                  {/* Category Tag */}
                  <Tag color={p.color} style={styles.categoryTag}>
                    {p.category}
                  </Tag>

                  {/* Tên dự án */}
                  <Title
                    level={3}
                    style={{
                      ...styles.cardTitle,
                      color: isDark ? "#fff" : "#111",
                    }}
                  >
                    {p.title}
                  </Title>

                  {/* Mô tả ngắn */}
                  <Paragraph
                    style={{
                      ...styles.desc,
                      color: isDark ? "#8c8c8c" : "#555555",
                    }}
                  >
                    {p.desc}
                  </Paragraph>

                  {/* Công nghệ sử dụng */}
                  <div
                    style={{
                      marginBottom: "28px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {p.tags.map((tag) => (
                      <Tag
                        key={tag}
                        style={{
                          ...styles.techTag,
                          background: isDark
                            ? "rgba(255, 255, 255, 0.04)"
                            : "rgba(0, 0, 0, 0.03)",
                          color: isDark ? "#a6a6a6" : "#555555",
                          borderColor: isDark
                            ? "rgba(255, 255, 255, 0.08)"
                            : "rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  {/* Footer của Card */}
                  <div
                    style={{
                      ...styles.cardFooter,
                      borderTop: isDark
                        ? "1px solid rgba(255, 255, 255, 0.06)"
                        : "1px solid rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <Button
                      type="link"
                      icon={<GithubOutlined />}
                      style={{
                        ...styles.githubBtn,
                        color: isDark ? "#fff" : "#111",
                      }}
                      href={p.github}
                      target="_blank"
                    >
                      Source Code
                    </Button>
                    <ArrowRightOutlined
                      style={{ color: "#1890ff", fontSize: "16px" }}
                    />
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
  section: {
    padding: "120px 0",
    position: "relative",
    transition: "background 0.4s ease", // Chuyển màu nền nhẹ nhàng
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: "800",
    letterSpacing: "2px",
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
  projectCard: {
    borderRadius: "24px",
    overflow: "hidden",
    transition: "background 0.4s ease, border 0.4s ease",
  },
  imgWrapper: {
    height: "260px",
    overflow: "hidden",
    position: "relative",
    background: "#1f1f1f",
  },
  projectImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  overlayBtn: {
    fontWeight: 600,
    boxShadow: "0 8px 20px rgba(24, 144, 255, 0.4)",
    border: "none",
    background: "#1890ff",
  },
  categoryTag: {
    marginBottom: "16px",
    borderRadius: "6px",
    fontWeight: "600",
    padding: "2px 10px",
    border: "none",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 14px",
    transition: "color 0.4s ease",
  },
  desc: {
    fontSize: "15px",
    lineHeight: "1.6",
    height: "72px",
    overflow: "hidden",
    marginBottom: "20px",
    transition: "color 0.4s ease",
  },
  techTag: {
    borderRadius: "8px",
    padding: "4px 12px",
    fontSize: "13px",
    margin: 0,
    transition: "all 0.4s ease",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    transition: "border 0.4s ease",
  },
  githubBtn: {
    padding: 0,
    fontWeight: 600,
    fontSize: "15px",
    opacity: 0.8,
    transition: "all 0.3s",
  },
};

export default Projects;
