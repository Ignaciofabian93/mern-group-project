import React from "react";
import clsx from "clsx";

export const Button = ({ text, onClick }) => {
  return (
    <button
      className={clsx(
        //default state
        "bg-[#6E8ABB] text-white",
        "py-3 px-8 leanding",
        "rounded-full",
        "font-semibold tracking-wide",
        "cursor-pointer",
        "inline-flex items-center justify-center",
        "relative shadow",
        //hover
        "transition",
        "hover:bg-[#395886] hover:shadow-md",
        //focus state
        "outline-none",
        "ring-[#6E8ABB]/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        //disabled state
        "disabled:bg-[#6E8ABB]/50 disabled:cursor-not-allowed disabled:shadow"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};



