import React from "react";
import clsx from "clsx";

const AuthLayout = ({ children }) => {
  return (
    <main
      className={clsx("w-screen", "h-screen", "flex flex-col bg-[#0a0a0a]")}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
