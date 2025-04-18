// src/pages/Landing.jsx
import React from "react";
import Button from "../components/Button";
import ButtonAndIcon from "../components/ButtonAndIcon";
import logoBlack from "../assets/FinanSee-logoBlack.svg";
import logoWhite from "../assets/FinanSee-logoWhite.svg";
import { useTheme } from "../contexts/ThemeContext";
import { CiLogin } from "react-icons/ci";

const Landing = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <header className="container mx-auto flex w-full items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={isDark ? logoWhite : logoBlack}
            alt="FinanSee Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links - Centralizado */}
        <nav className="absolute left-1/2 flex -translate-x-1/2 transform items-center gap-8">
          <a
            href=""
            className="text-black-400 hover:text-accent-400 dark:text-white-500 dark:hover:text-accent-300 transition-colors"
          >
            Home
          </a>
          <a
            href=""
            className="text-black-400 hover:text-accent-400 dark:text-white-500 dark:hover:text-accent-300 transition-colors"
          >
            Features
          </a>
          <a
            href=""
            className="text-black-400 hover:text-accent-400 dark:text-white-500 dark:hover:text-accent-300 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Login Button */}
        <ButtonAndIcon
          icon={CiLogin}
          bgColor="bg-black-200 dark:bg-white-100"
          textColor="text-white-200 dark:text-black-200"
          hoverColor="hover:bg-black-400 dark:hover:bg-white-300"
        >
          Entrar
        </ButtonAndIcon>
      </header>

      {/* Logo e título */}
      <section className="w-full py-10">
        <h1 className="text-black-500 text-3xl font-semibold dark:text-white">
          Take Control Of Your{" "}
          <span className="text-green-500 dark:text-green-200">Finances</span>{" "}
          Today
        </h1>
        <p className="text-black-400 dark:text-white-500 mx-auto mt-2 max-w-3xl text-lg">
          Take charge of your financial security by tracking expenses,
          investments, and budgeting. With FinanSee, start planning your future
          today!
        </p>
        <Button onClick={() => alert("Controlling finances!")}>
          The Control Now
        </Button>
      </section>

      {/* Section trusted by */}
      <section className="bg-accent-100 dark:bg-accent-300 w-full py-10">
        <h2 className="text-black-500 text-2xl font-semibold dark:text-white">
          Trusted By
        </h2>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Adicionar logos das empresas */}
          <img src="company1.svg" alt="Company 1" className="h-10" />
          <img src="company2.svg" alt="Company 2" className="h-10" />
          <img src="company3.svg" alt="Company 3" className="h-10" />
        </div>
      </section>

      {/* Expense Optimization Solutions */}
      <section className="w-full py-10">
        <h2 className="text-black-500 text-2xl font-semibold dark:text-white">
          Expense Optimization Solutions
        </h2>
        <p className="text-black-400 dark:text-white-500 mx-auto mt-2 max-w-3xl text-lg">
          Create a financial plan designed for you. Personalize your goals and
          track expenses to stay on top of your financial health.
        </p>

        {/* Solution Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white-100 dark:bg-black-200 rounded-lg p-6 shadow-md">
            <h3 className="text-black-500 text-xl font-semibold dark:text-white">
              Personalized Touch
            </h3>
            <p className="text-black-400 dark:text-white-500 mt-2">
              Tailored financial strategies designed to meet your unique goals.
            </p>
          </div>
          <div className="bg-white-100 dark:bg-black-200 rounded-lg p-6 shadow-md">
            <h3 className="text-black-500 text-xl font-semibold dark:text-white">
              Growth Or Deviation
            </h3>
            <p className="text-black-400 dark:text-white-500 mt-2">
              Stay on track to reach your financial goals or adjust for
              unexpected events.
            </p>
          </div>
          <div className="bg-white-100 dark:bg-black-200 rounded-lg p-6 shadow-md">
            <h3 className="text-black-500 text-xl font-semibold dark:text-white">
              Cash Flow
            </h3>
            <p className="text-black-400 dark:text-white-500 mt-2">
              Manage your income and expenses with a visual cash flow tool for
              easy tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-green-100 py-10 dark:bg-green-300">
        <h2 className="text-black-500 text-2xl font-semibold dark:text-white">
          Simplify Your Finances With Trusted, Easy-To-Use Services.
        </h2>
        <p className="text-black-400 dark:text-white-500 mx-auto mt-2 max-w-3xl text-lg">
          Our easy-to-use financial tools make managing your money simple and
          straightforward.
        </p>
        <Button onClick={() => alert("Get Started!")}>
          Start & Free Trial
        </Button>
      </section>
    </div>
  );
};

export default Landing;
