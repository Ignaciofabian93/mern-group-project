import React from "react";
import clsx from "clsx";

export const ButtonGoogle = ({text}) => {
  return (
    <google
      className={clsx(
        //default state
        "bg-[#B5BAC1] text-[#1E1F22]",
        "py-3 px-14 leanding",
        "rounded-full",
        "font-semibold tracking-wide",
        "cursor-pointer",
        "inline-flex items-center justify-center",
        "relative shadow",
        //hover
        "transition",
        "hover:bg-[#DBDEE1] hover:shadow-md",
        //focus state
        "outline-none",
        "ring-[#6E8ABB]/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        //disabled state
        "disabled:bg-[#6E8ABB]/50 disabled:cursor-not-allowed disabled:shadow"
      )}
    >
      {text}
    </google>
  );
};
