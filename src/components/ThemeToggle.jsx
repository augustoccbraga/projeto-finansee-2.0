import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ButtonIcon from "./ButtonIcon";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ButtonIcon
      icon={isDark ? MdOutlineLightMode : MdOutlineDarkMode}
      onClick={toggleTheme}
      className="fixed right-4 bottom-4 z-50 shadow-lg"
    />
  );
};

export default ThemeToggle;
