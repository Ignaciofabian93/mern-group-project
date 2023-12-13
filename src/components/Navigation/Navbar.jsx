import React, { useContext } from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
<<<<<<< HEAD
// import { Logo } from "../Icons/Logo";
=======
import { Logo } from "../Icons/Logo";
import { ThemeContext } from "../../context/themeContext";
>>>>>>> 6e3af71e9b2ff9a46ee16098a1590ddaf18a2d92

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
<<<<<<< HEAD
    <nav className="bg-gray-500 justify-between border-gray-300 border-b-2 flex px-10 py-2 dark:bg-[#1E1F22] transition duration-500 dark:border-[#313338]  ">
      <button onClick={""} className="flex gap-2 items-center">
        {/* <Logo /> */}
=======
    <nav className="w-full h-[50px] fixed top-0 flex bg-gray-500 justify-between border-gray-300 border-b-2 px-10 py-2 dark:bg-[#1E1F22] transition duration-500 dark:border-[#313338]">
      <div className="flex gap-2 items-center">
        <Logo />
>>>>>>> 6e3af71e9b2ff9a46ee16098a1590ddaf18a2d92
        <p className="text-white font-semibold dark:text-white transition duration-500">
          DevsConnect
        </p>
      </div>

      <button onClick={toggleTheme}>
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
    </nav>
  );
};
