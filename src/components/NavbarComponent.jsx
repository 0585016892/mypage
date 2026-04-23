import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ép màu trắng trực tiếp vào style của thẻ a
  const linkStyle = { color: '#fff' };

  const menuItems = [
    { label: <a href="/" style={linkStyle}>Home</a>, key: 'home' },
    { label: <a href="#about" style={linkStyle}>About</a>, key: 'about' },
    { label: <a href="#skills" style={linkStyle}>Skills</a>, key: 'skills' },
    { label: <a href="#projects" style={linkStyle}>Portfolio</a>, key: 'projects' },
    { label: <a href="#contact" style={linkStyle}>Contact</a>, key: 'contact' },
  ];

  return (
    <>
      {/* CSS Hack để ép màu trắng cho Ant Menu mà không cần file .css riêng */}
      <style>
        {`
          .custom-ant-menu .ant-menu-item { color: #fff !important; }
          .custom-ant-menu .ant-menu-item-active::after, 
          .custom-ant-menu .ant-menu-item-selected::after { 
            border-bottom-color: #1890ff !important; 
          }
          .custom-ant-menu .ant-menu-item:hover { color: #1890ff !important; }
        `}
      </style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          ...styles.navbar,
          ...(scrolled ? styles.scrolled : styles.transparent),
        }}
      >
        <div style={styles.navContainer}>
          {/* Logo */}
          <div style={styles.logo}>
            <a href="/" style={styles.logoText}>
              HUNG<span style={{ color: '#1890ff' }}>.</span>
            </a>
          </div>

          {/* Menu Items */}
          <div style={styles.menuWrapper}>
            <Menu
              mode="horizontal"
              items={menuItems}
              className="custom-ant-menu" // Dùng class đã định nghĩa ở thẻ style trên
              style={styles.menu}
              disabledOverflow={true}
              selectable={false} // Để tránh giữ màu xanh khi click
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
  },
  transparent: {
    background: 'transparent',
    borderBottom: '1px solid transparent',
  },
  scrolled: {
    background: 'rgba(10, 10, 10, 0.75)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    height: '65px',
  },
  navContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#fff', // Logo màu trắng
    textDecoration: 'none',
    letterSpacing: '1px',
  },
  menuWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menu: {
    background: 'transparent',
    borderBottom: 'none',
    fontSize: '15px',
    fontWeight: '500',
    minWidth: '420px',
    lineHeight: '65px', // Cân giữa menu
  },
};

export default NavbarComponent;