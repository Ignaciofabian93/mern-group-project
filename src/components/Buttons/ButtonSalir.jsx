import React from "react";
import clsx from "clsx";
import { Logout } from "../Icons/Logout";

export const ButtonSalir = ({ text, onClick }) => {
  return (
    <button
      className={clsx(
        /* ----default theme -----*/
        "w-full h-[40px]",
        "flex items-center",
        "pl-4 my-2",
        "rounded-md",
        "bg-gray-50",
        "text-white",
        "flex justify-between pr-3",

        // "border border-gray-300",
        "text-gray-900 text-sm",
        "block",
        "rounded-lg",
        "shadow-md",
        "transition duration-300",

        /* ----focus theme -----*/
        "focus:ring-blue-500",
        "focus:border-blue-500",

        /* ----dark theme -----*/
        "bg-red-500",
        "hover:bg-[#8a3537]",
        "dark:border-gray-600",
        "dark:placeholder-gray-400",
        "dark:text-white",
        "dark:focus:ring-blue-500",
        "dark:focus:border-blue-500"
      )}
      onClick={onClick}
    >
      {text}
      <Logout />
    </button>
  );
};
