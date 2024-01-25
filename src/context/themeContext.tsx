import React, { Children, useState } from "react";

export const themeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <themeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </themeContext.Provider>
    </>
  );
};
