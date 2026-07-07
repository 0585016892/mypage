import React, { useEffect, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { motion } from "framer-motion";
import {
  MenuOutlined,
  CloseOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { useTheme } from "../contexts/ThemeContext"; // Import hook từ ThemeContext của bạn
import "antd/dist/reset.css";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Gọi dữ liệu theme từ context

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Định nghĩa màu động dựa trên trạng thái theme (Phục vụ Responsive & Đổi màu nền)
  const isDark = theme === "dark";
  const linkStyle = { color: isDark ? "#fff" : "#111" };

  const menuItems = [
    {
      label: (
        <a href="/" style={linkStyle}>
          Home
        </a>
      ),
      key: "home",
    },
    {
      label: (
        <a href="#about" style={linkStyle}>
          About
        </a>
      ),
      key: "about",
    },
    {
      label: (
        <a href="#skills" style={linkStyle}>
          Skills
        </a>
      ),
      key: "skills",
    },
    {
      label: (
        <a href="#projects" style={linkStyle}>
          Portfolio
        </a>
      ),
      key: "projects",
    },
    {
      label: (
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      ),
      key: "contact",
    },
  ];

  return (
    <>
      {/* CSS Injection: Tùy biến CSS Ant Design linh hoạt theo Theme hệ thống */}
      <style>
        {`
          .custom-ant-menu .ant-menu-item { color: ${isDark ? "#fff" : "#111"} !important; }
          .custom-ant-menu .ant-menu-item-active::after, 
          .custom-ant-menu .ant-menu-item-selected::after { 
            border-bottom-color: #1890ff !important; 
          }
          .custom-ant-menu .ant-menu-item:hover { color: #1890ff !important; }

          /* Ẩn Menu chính trên Mobile và ẩn nút Hamburger trên Desktop */
          @media (max-width: 768px) {
            .desktop-menu-wrapper { display: none !important; }
            .mobile-toggle-btn { display: inline-flex !important; }
          }
          @media (min-width: 769px) {
            .desktop-menu-wrapper { display: flex !important; }
            .mobile-toggle-btn { display: none !important; }
          }

          /* Tùy biến giao diện Drawer đồng bộ theo theme */
          .mobile-drawer .ant-drawer-content {
            background-color: ${isDark ? "#111" : "#fff"} !important;
          }
          .mobile-drawer .ant-drawer-body .ant-menu-vertical .ant-menu-item {
            font-size: 18px !important;
            margin-bottom: 16px !important;
          }
        `}
      </style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          ...styles.navbar,
          background: scrolled
            ? isDark
              ? "rgba(10, 10, 10, 0.75)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          borderBottom: scrolled
            ? isDark
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.06)"
            : "1px solid transparent",
          height: scrolled ? "65px" : "70px",
        }}
      >
        <div style={styles.navContainer}>
          {/* Logo */}
          <div style={styles.logo}>
            <a
              href="/"
              style={{ ...styles.logoText, color: isDark ? "#fff" : "#111" }}
            >
              HUNG<span style={{ color: "#1890ff" }}>.</span>
            </a>
          </div>

          {/* GIAO DIỆN DESKTOP (Ẩn trên mobile) */}
          <div className="desktop-menu-wrapper" style={styles.menuWrapper}>
            <Menu
              mode="horizontal"
              items={menuItems}
              className="custom-ant-menu"
              style={styles.menu}
              disabledOverflow={true}
              selectable={false}
            />
            {/* Nút đổi Theme trên máy tính */}
            <Button
              type="text"
              shape="circle"
              icon={
                isDark ? (
                  <SunOutlined style={{ color: "#fff" }} />
                ) : (
                  <MoonOutlined style={{ color: "#111" }} />
                )
              }
              onClick={toggleTheme}
              style={{ marginLeft: "20px", fontSize: "18px" }}
            />
          </div>

          {/* GIAO DIỆN MOBILE CONTROL (Hiện trên mobile) */}
          <div
            className="mobile-toggle-btn"
            style={{ gap: "12px", alignItems: "center", display: "none" }}
          >
            {/* Nút đổi Theme trên điện thoại */}
            <Button
              type="text"
              shape="circle"
              icon={
                isDark ? (
                  <SunOutlined style={{ color: "#fff" }} />
                ) : (
                  <MoonOutlined style={{ color: "#111" }} />
                )
              }
              onClick={toggleTheme}
              style={{ fontSize: "18px" }}
            />
            {/* Nút Hamburger bật Menu */}
            <Button
              type="text"
              icon={
                <MenuOutlined
                  style={{ color: isDark ? "#fff" : "#111", fontSize: "20px" }}
                />
              }
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </motion.nav>

      {/* Menu dạng ngăn kéo (Drawer) khi dùng Mobile */}
      <Drawer
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        closable={false}
        width={280}
        className="mobile-drawer"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button
            type="text"
            icon={
              <CloseOutlined
                style={{ color: isDark ? "#fff" : "#111", fontSize: "20px" }}
              />
            }
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
        <Menu
          mode="vertical"
          items={menuItems}
          style={{ background: "transparent", borderRight: "none" }}
          selectable={false}
          onClick={() => setMobileMenuOpen(false)} // Tự đóng khi click chọn item
        />
      </Drawer>
    </>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
  },
  navContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "800",
    textDecoration: "none",
    letterSpacing: "1px",
    transition: "color 0.3s ease",
  },
  menuWrapper: {
    alignItems: "center",
  },
  menu: {
    background: "transparent",
    borderBottom: "none",
    fontSize: "15px",
    fontWeight: "500",
    minWidth: "400px",
  },
};

export default NavbarComponent;
