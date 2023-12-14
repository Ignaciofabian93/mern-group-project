import React, { useContext } from "react";
import { Navbar } from "../components/Navigation/Navbar";
import { ThemeContext } from "../context/themeContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme === "dark" && "dark"} w-full h-screen`}>
      <Navbar />
      <section className="w-full h-full pt-[50px] bg-gradient-to-b from-[#F8FAFC] to-[#DFF1FB] via-[#EEDDEC] dark:bg-gradient-to-b dark:from-[#0B1120] dark:to-[#361D3A] dark:via-[#0B263B] transition duration-300">
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
