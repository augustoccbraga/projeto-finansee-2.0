import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  return (
    <div className="bg-white-200 dark:bg-black-200 text-black-100 dark:text-white-100 min-h-screen p-8">
      <div className="bg-white-100 text-black-100 dark:bg-black-300 dark:text-white-200 rounded-lg p-4">
        <p>Este texto será preto no modo claro e branco no modo escuro.</p>
      </div>

      <Button onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? "DESATIVAR DARK MODE" : "ATIVAR DARK MODE"}
      </Button>

      <Button onClick={() => navigate("/auth")}>LOGIN</Button>
    </div>
  );
};

export default Landing;
