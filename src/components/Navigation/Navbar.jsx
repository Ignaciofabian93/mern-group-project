import React from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";

const Navbar = ({toogleDarkMode, darkMode}) => {
  return (
    <div className="dark:bg-[#1E1F22] justify-between flex px-10 py-4">
      <p className="dark:text-white">DevChat</p>
      <button onClick={toogleDarkMode}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
};

export default Navbar;
