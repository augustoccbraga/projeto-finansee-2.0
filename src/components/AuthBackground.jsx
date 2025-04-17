import React from "react";
import logoBlack from "../assets/FinanSee-logoBlack.svg";
import logoWhite from "../assets/FinanSee-logoWhite.svg";
import loginBg from "../assets/background-login.png";
import registerBg from "../assets/background-register.png";
import { useTheme } from "../contexts/ThemeContext";

const AuthBackground = ({ isRegistering }) => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0">
      {/* Fixed Logo Container */}
      <div className="fixed top-8 left-1/2 z-20 -translate-x-1/2 transform">
        <img
          src={isDark ? logoWhite : logoBlack}
          alt="FinanSee Logo"
          className="h-12"
        />
      </div>

      <div className="flex h-full w-full">
        {/* Left Side */}
        <div
          className={`from-accent-200 to-accent-400 dark:from-black-400 dark:to-black-200 hidden bg-gradient-to-b p-8 transition-[width] duration-700 ease-in-out lg:block ${
            isRegistering ? "w-3/4" : "w-1/4"
          }`}
        >
          <div className="flex h-full flex-col justify-center">
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl">
              <img
                src={loginBg}
                alt="Login Background"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className={`from-accent-200 to-accent-400 dark:from-black-400 dark:to-black-200 hidden bg-gradient-to-b p-8 transition-[width] duration-700 ease-in-out lg:block ${
            isRegistering ? "w-1/4" : "w-3/4"
          }`}
        >
          <div className="flex h-full flex-col justify-center">
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl">
              <img
                src={registerBg}
                alt="Register Background"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBackground;
