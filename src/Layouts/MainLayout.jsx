import React, { useContext } from "react";
import { Navbar } from "../components/Navigation/Navbar";
import { ThemeContext } from "../context/themeContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme === "dark" && "dark"} w-full h-screen`}>
      <Navbar />
      <section className="w-full h-full pt-[50px]">{children}</section>
    </main>
  );
};

export default MainLayout;
