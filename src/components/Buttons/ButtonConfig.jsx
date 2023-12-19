import React from "react";
import clsx from "clsx";
import { ConfigIcon } from "../../constants/icons";

export const ButtonConfig = ({ text, onClick }) => {
  return (
    <button
      className={clsx(
        "w-full h-[40px]",
        "flex items-center justify-between",
        "pl-4 my-2",
        "rounded-md",
        /* ----default theme -----*/
        "bg-cyan-600",
        "text-white",
        "hover:bg-cyan-800",
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
        // "dark:bg-[#334155]",
        "dark:border-gray-600",
        "dark:placeholder-gray-400",
        "dark:text-white",
        "dark:focus:ring-blue-500",
        "dark:focus:border-blue-500"
      )}
      onClick={onClick}
    >
      {text}
      <div className="pr-[12px]">
        <img src={ConfigIcon} alt="icon" width={20} height={20} />
      </div>
    </button>
  );
};
