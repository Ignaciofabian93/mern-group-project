import React from "react";
import clsx from 'clsx'

export default function Room({text, imgRoom}) {
  return (
    <div
      className={clsx(
        //default state
        "bg-[#5865F2] text-white",
        "h-10 w-10",
        "rounded-full ",
        "font-semibold tracking-wide",
        "cursor-pointer",
        "inline-flex items-center justify-center",
        "relative shadow",
        //hover
        "transition",
        "hover:bg-[#4752C4] hover:shadow-md",
        //focus state
        "outline-none",
        "ring-[#4752C4]/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        //disabled state
        "disabled:bg-[#4752C4]/50 disabled:cursor-not-allowed disabled:shadow"
      )}
    >
      <img className="rounded-full h-10 w-10" src={imgRoom} alt="" />
      {text}
    </div>
  );
}
