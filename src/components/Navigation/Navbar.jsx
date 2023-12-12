import React from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import useMessage from "../../hooks/useMessage";

const Navbar = ({toogleDarkMode, darkMode}) => {

  const { user } = useMessage();

  return (
    <div className="bg-gray-500 dark:bg-[#1E1F22] transition duration-500 justify-between flex px-10 py-2">
      <p className="text-white dark:text-white transition duration-500">{user.name}</p>
      <div>
        
      </div>
      <button onClick={toogleDarkMode}>
        {darkMode ?  <IconSun/>  : <IconMoon />}
      </button>
      
    </div>
  );
};

export default Navbar;
