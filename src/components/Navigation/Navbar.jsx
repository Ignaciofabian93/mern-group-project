import React, { useContext } from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import { Logo } from "../Icons/Logo";
import { ThemeContext } from "../../context/themeContext";
import { clsx } from "clsx";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      className={clsx(
        /* ----- Default Value -----*/
        "w-full h-[50px]",
        "fixed top-0",
        "flex  justify-between",
        "px-10 py-2",
        /* ----- Default Value Color-----*/
        "border-gray-300 border-b-2",
        "bg-[#F8FAFC]",
        /* ----- Dark Theme Background -----*/
        "dark:bg-[#0B1120]  dark:border-[#313338]",
        /* ----- Transition -----*/
        "transition duration-500"
      )}
    >
      <div className="flex gap-2 items-center">
        <Logo />
        <p
          className={clsx(
            "text-black font-semibold",
            "dark:text-[#F8FAFC] transition duration-500",
            "text-lg"
          )}
        >
          devsconnect
        </p>
      </div>

      <button onClick={toggleTheme}>
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
    </nav>
  );
};
