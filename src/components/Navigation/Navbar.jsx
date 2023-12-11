import React from "react";

const Navbar = ({ toogleDarkMode, darkMode }) => {
  return (
    <div className=" w-full h-8  px-5 ">
      <div className="flex items-center justify-between">
        <p className="dark:text-white">DevChat</p>

        <button className="dark:text-white" onClick={toogleDarkMode}>
          {darkMode ? "LHT" : "DRK"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
