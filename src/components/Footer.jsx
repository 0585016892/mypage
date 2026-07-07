import React from "react";
import { Layout, Space, Typography, Divider } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  GithubFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"; // Import hook sử dụng ThemeContext của bạn

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme(); // Đọc trạng thái giao diện hệ thống
  const isDark = theme === "dark";

  return (
    <AntFooter
      style={{
        ...styles.footer,
        backgroundColor: isDark ? "#050505" : "#ffffff", // Màu nền thay đổi theo theme
        borderTop: isDark
          ? "1px solid rgba(255, 255, 255, 0.06)"
          : "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={styles.container}>
        {/* Social Icons Section */}
        <Space size="large" style={{ marginBottom: "20px" }}>
          {[
            {
              icon: <FacebookFilled />,
              link: "https://www.facebook.com/tran.khanh.hung.770881/",
            },
            {
              icon: <InstagramOutlined />,
              link: "https://www.instagram.com/_hung_lucky/",
            },
            { icon: <GithubFilled />, link: "https://github.com/0585016892" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#1890ff" }}
              style={{
                ...styles.socialLink,
                color: isDark
                  ? "rgba(255, 255, 255, 0.45)"
                  : "rgba(0, 0, 0, 0.45)", // Đảo màu icon mạng xã hội
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </Space>

        <Divider
          style={{
            borderColor: isDark
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(0, 0, 0, 0.06)",
            margin: "20px 0",
          }}
        />

        {/* Copyright Section */}
        <div style={styles.copyrightBox}>
          <Text
            style={{
              ...styles.footerText,
              color: isDark
                ? "rgba(255, 255, 255, 0.45)"
                : "rgba(0, 0, 0, 0.55)",
            }}
          >
            © {currentYear}{" "}
            <Text strong style={{ color: "#1890ff" }}>
              Trần Khánh Hưng
            </Text>
            . All rights reserved.
          </Text>
          <br />
        </div>
      </div>
    </AntFooter>
  );
};

const styles = {
  footer: {
    padding: "40px 0",
    textAlign: "center",
    transition: "background-color 0.4s ease, border-top 0.4s ease", // Hiệu ứng chuyển vùng mượt mà
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  socialLink: {
    fontSize: "22px",
    transition: "all 0.3s ease",
  },
  footerText: {
    fontSize: "14px",
    letterSpacing: "0.5px",
    transition: "color 0.4s ease",
  },
  copyrightBox: {
    marginTop: "10px",
  },
};

export default Footer;
