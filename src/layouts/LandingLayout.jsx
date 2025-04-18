// src/layouts/LandingLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <main className="bg-white-300 dark:bg-black-300 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Outlet />
      </div>
    </main>
  );
};

export default LandingLayout;
