import React from "react";
import useMessage from "../../hooks/useMessage";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import { Logo } from "../Icons/Logo";

export const Navbar = ({ darkMode, toogleDarkMode }) => {
  const { user } = useMessage();

  return (
    <div className="bg-gray-500 justify-between flex px-10 py-2 dark:bg-[#1E1F22] transition duration-500 ">
      <div className="flex gap-2 items-center">
        <Logo />
        <p className="text-white font-semibold dark:text-white transition duration-500">
          Connectdevelop
        </p>
      </div>

      <button onClick={toogleDarkMode}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
};

