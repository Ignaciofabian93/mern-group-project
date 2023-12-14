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
        "shadow-lg",
        "fixed top-0",
        "flex  justify-between",
        "pl-[50px] pr-[50px] py-2",
        "bg-[#5C6069] ",
        "font-medium",
        /* ----- Dark Theme Background -----*/
        "dark:bg-[#0B1120]",

        /* ----- Transition -----*/
        "transition duration-300"
      )}
    >
      <div className="flex gap-2 items-center">
        <Logo />
        <p
          className={clsx(
            "text-[#F8FAFC] transition duration-300",
            "text-base"
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
