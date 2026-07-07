import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Khởi tạo Context
const ThemeContext = createContext();

// 2. Tạo Provider Component
export const ThemeProvider = ({ children }) => {
  // Lấy theme đã lưu trước đó từ localStorage, nếu chưa có thì mặc định là 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Mỗi khi theme đổi, cập nhật thuộc tính data-theme của thẻ html và lưu vào localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Hàm để đổi qua lại giữa sáng và tối
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook để gọi Context ngắn gọn hơn ở các component con
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme phải được đặt bên trong ThemeProvider");
  }
  return context;
};
