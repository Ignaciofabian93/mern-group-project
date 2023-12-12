import React from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import { Logo } from "../Icons/Logo";

export const Navbar = ({ darkMode, toogleDarkMode }) => {
  

  return (
    <div className="bg-gray-500 justify-between border-gray-300 border-b-2 flex px-10 py-2 dark:bg-[#1E1F22] transition duration-500 dark:border-[#313338]  ">
      <button onClick={""} className="flex gap-2 items-center">
        <Logo />
        <p className="text-white font-semibold dark:text-white transition duration-500">
          Connectdevelop
        </p>
      </button>

      <button onClick={toogleDarkMode}>
        {darkMode ? <IconSun /> : <IconMoon />}
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </div>
    </nav>
  );
};

