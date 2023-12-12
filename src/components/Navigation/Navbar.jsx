import React from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import useUser from "../../hooks/useUser";

const Navbar = ({ toogleDarkMode, darkMode }) => {
  const { user } = useUser();

  return (
    <nav className="w-full h-[50px] flex items-center bg-gray-500 dark:bg-[#1E1F22] transition duration-500 justify-between px-10 py-2 fixed top-0">
      {user && (
        <p className="text-white dark:text-white transition duration-500">
          {user.name}
        </p>
      )}
      <button onClick={toogleDarkMode}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
