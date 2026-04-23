import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  // Tạo thanh progress bar nhỏ ở trên cùng để người dùng biết họ đang ở đâu
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cấu hình chung cho hiệu ứng xuất hiện của mỗi section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a' }}>
      {/* Thanh tiến trình cuộn trang (Optional - Cực pro) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#1890ff',
          transformOrigin: '0%',
          zIndex: 9999
        }}
        style={{ scaleX }}
      />

      {/* Hero thường giữ nguyên vì nó xuất hiện ngay khi load trang */}
      <Hero />

      {/* Các section sau sẽ tự động trượt lên khi bạn cuộn tới */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;