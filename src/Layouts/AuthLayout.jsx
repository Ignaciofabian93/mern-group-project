import React from "react";
import clsx from "clsx";

const AuthLayout = ({ children }) => {
  return (
    <main className={clsx("w-screen", "h-screen", "flex flex-col")}>
      {children}
    </main>
  );
};

export default AuthLayout;
