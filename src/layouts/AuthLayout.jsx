import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex min-h-screen flex-col-reverse lg:flex-row">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
