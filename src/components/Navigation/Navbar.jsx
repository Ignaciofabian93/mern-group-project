import React from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";

const Navbar = ({toogleDarkMode, darkMode}) => {
  return (
    <div className="bg-gray-500 dark:bg-[#1E1F22] transition duration-500 justify-between flex px-10 py-2">
      <p className="text-white dark:text-white transition duration-500">DevChat</p>
      <div>
        
      </div>
      <button onClick={toogleDarkMode}>
        {darkMode ?  <IconSun/>  : <IconMoon />}
      </button>
      
    </div>
  );
};

export default Navbar;
