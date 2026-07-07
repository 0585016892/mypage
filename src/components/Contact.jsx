import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Row, Col, message } from "antd";
import { motion } from "framer-motion";
import { SendOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import { useTheme } from "../contexts/ThemeContext"; // Import hook sử dụng ThemeContext của bạn

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme(); // Đọc trạng thái giao diện hệ thống
  const isDark = theme === "dark";

  const onFinish = (values) => {
    setLoading(true);

    // Chuẩn bị dữ liệu cho EmailJS
    const templateParams = {
      name: values.name,
      user_email: values.user_email,
      message: values.message,
    };

    emailjs
      .send(
        "service_7v079sf",
        "template_zuq6bv6",
        templateParams,
        "n6o9BTtmuk-RKP6gv",
      )
      .then(
        () => {
          message.success({
            content: "Tin nhắn đã được gửi thành công!",
            style: { marginTop: "10vh" },
          });
          form.resetFields();
          setLoading(false);
        },
        (error) => {
          message.error("Gửi thất bại, vui lòng thử lại sau.");
          console.log("FAILED...", error);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      style={{
        ...styles.section,
        background: isDark ? "#050505" : "#f9f9f9", // Thay đổi màu nền tổng thể của section
      }}
    >
      <div style={styles.container}>
        {/* Tiêu đề Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <Title
            level={2}
            style={{ ...styles.sectionTitle, color: isDark ? "#fff" : "#111" }}
          >
            LIÊN HỆ
          </Title>
          <div style={styles.underline}></div>
          <Text
            style={{
              ...styles.subText,
              color: isDark ? "rgba(255,255,255,0.5)" : "#555",
            }}
          >
            Bạn có ý tưởng dự án? Hãy để lại lời nhắn cho mình nhé!
          </Text>
        </motion.div>

        <Row justify="center">
          <Col xs={24} md={16} lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={{
                  ...styles.contactCard,
                  background: isDark ? "#111111" : "#ffffff", // Thay đổi nền card tương ứng
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(0, 0, 0, 0.06)",
                  boxShadow: isDark
                    ? "none"
                    : "0 10px 30px rgba(0, 0, 0, 0.04)",
                }}
                bordered={false}
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    label={
                      <span
                        style={{
                          ...styles.label,
                          color: isDark ? "rgba(255, 255, 255, 0.85)" : "#333",
                        }}
                      >
                        Tên của bạn
                      </span>
                    }
                    name="name"
                    rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
                  >
                    <Input
                      prefix={<UserOutlined style={styles.icon} />}
                      placeholder="Nhập tên"
                      style={{
                        ...styles.input,
                        background: isDark ? "rgba(0, 0, 0, 0.2)" : "#fff",
                        borderColor: isDark ? "#333" : "#d9d9d9",
                        color: isDark ? "#fff" : "#000",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span
                        style={{
                          ...styles.label,
                          color: isDark ? "rgba(255, 255, 255, 0.85)" : "#333",
                        }}
                      >
                        Email liên hệ
                      </span>
                    }
                    name="user_email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email!" },
                      { type: "email", message: "Email không hợp lệ!" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined style={styles.icon} />}
                      placeholder="example@gmail.com"
                      style={{
                        ...styles.input,
                        background: isDark ? "rgba(0, 0, 0, 0.2)" : "#fff",
                        borderColor: isDark ? "#333" : "#d9d9d9",
                        color: isDark ? "#fff" : "#000",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span
                        style={{
                          ...styles.label,
                          color: isDark ? "rgba(255, 255, 255, 0.85)" : "#333",
                        }}
                      >
                        Nội dung tin nhắn
                      </span>
                    }
                    name="message"
                    rules={[
                      { required: true, message: "Vui lòng nhập tin nhắn!" },
                    ]}
                  >
                    <TextArea
                      rows={5}
                      placeholder="Tôi có thể giúp gì cho bạn?"
                      style={{
                        ...styles.input,
                        background: isDark ? "rgba(0, 0, 0, 0.2)" : "#fff",
                        borderColor: isDark ? "#333" : "#d9d9d9",
                        color: isDark ? "#fff" : "#000",
                        paddingLeft: "12px", // Sửa lỗi hiển thị khi prefix không áp dụng trực tiếp được với TextArea nguyên bản
                      }}
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SendOutlined />}
                      loading={loading}
                      style={styles.submitBtn}
                      block
                    >
                      Gửi Tin Nhắn
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "120px 0",
    minHeight: "90vh",
    transition: "background 0.4s ease",
  },
  container: {
    maxWidth: "1200px",
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
    background: "linear-gradient(90deg, #1890ff, #69c0ff)",
    margin: "16px auto 20px",
    borderRadius: "4px",
  },
  subText: {
    fontSize: "16px",
    transition: "color 0.4s ease",
  },
  contactCard: {
    borderRadius: "24px",
    padding: "16px",
    border: "1px solid",
    transition: "background 0.4s ease, border 0.4s ease",
  },
  label: {
    fontWeight: 500,
    fontSize: "15px",
    transition: "color 0.4s ease",
  },
  input: {
    borderRadius: "8px",
    padding: "10px 12px",
    transition: "all 0.3s ease",
  },
  icon: {
    color: "#1890ff",
  },
  submitBtn: {
    height: "50px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 600,
    marginTop: "10px",
    background: "#1890ff",
    border: "none",
    boxShadow: "0 8px 20px rgba(24, 144, 255, 0.2)",
  },
};

export default Contact;
