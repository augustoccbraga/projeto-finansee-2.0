import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      {children}
    </div>
  );
};

export default AuthLayout;
