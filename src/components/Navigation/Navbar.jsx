import React, { useContext } from "react";
import { IconMoon } from "../Icons/Moon";
import { IconSun } from "../Icons/Sun";
import { Logo } from "../Icons/Logo";
import { ThemeContext } from "../../context/themeContext";
import { clsx } from "clsx";
import { Tooltip } from "@nextui-org/react";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      className={clsx(
        /* ----- Default Value -----*/
        "fixed top-0",
        "flex  justify-between",
        "font-medium",
        "w-full h-[50px]",
        "pl-[50px] pr-[50px] py-2",
        /*----color----*/
        "bg-gray-600 ",
        /* ----- Dark Theme Background -----*/
        "dark:bg-slate-900",
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
      <Tooltip
        content={theme === "dark" ? "Modo claro" : "Modo oscuro"}
        placement="bottom"
      >
        <button onClick={toggleTheme}>
          {theme === "dark" ? <IconSun /> : <IconMoon />}
        </button>
      </Tooltip>
    </nav>
  );
};
