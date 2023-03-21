import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleThemeMode()
  };

  const toggleThemeMode = () => {
    if (isDarkTheme) {
      document.body.style.backgroundColor = "#16012B"
      document.body.style.color = "#FFEBE0"
    } else {
      document.body.style.backgroundColor = "#FFEBE0"
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