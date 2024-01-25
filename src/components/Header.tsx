import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import { themeContext } from "../context/themeContext";
import { useContext } from "react";

export const Header = () => {
  const { changeTheme, theme } = useContext(themeContext);
  return (
    <>
      <div className="change_theme_div">
        <h2>devfinder</h2>
        <button onClick={changeTheme} className="change_theme_btn">
          {theme == "light" ? "Dark" : "Light"}
          <img src={theme == "light" ? moonIcon : sunIcon} alt="" />
        </button>
      </div>
    </>
  );
};
