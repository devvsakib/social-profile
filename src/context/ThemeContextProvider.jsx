import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  localStorage.setItem("isDarkTheme", isDarkTheme);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
    toggleThemeMode();
  };




  const toggleThemeMode = () => {
    const isDark = localStorage.getItem("isDarkTheme") === "true";
    if (isDark) {
      document.body.style.backgroundColor = "#16012B"
      document.querySelector(".bannerCard").style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.40)"
      document.body.style.color = "#FFEBE0"
    } else {
      document.body.style.backgroundColor = "#FFEBE0"
      document.querySelector(".bannerCard").style.boxShadow = "0px 6px 12px #A68686"
      document.body.style.color = "#16012B"
      document.body.style.transitionDuration = "1s"
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;