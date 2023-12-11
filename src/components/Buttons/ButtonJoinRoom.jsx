import React from "react";
import clsx from "clsx";

export const ButtonJoinRoom = ({ joinRoom }) => {
  return (
    <button
      className={clsx(
        //default state
        "bg-[#23A55A] text-white",
        "text-xs",
        "py-1 px-6 leanding",
        "rounded-full",
        "font-semibold tracking-wide",
        "cursor-pointer",
        "inline-flex items-center justify-center",
        "relative shadow",
        //hover
        "transition",
        "hover:bg-[#358857] hover:shadow-md",
        //focus state
        "outline-none",
        "ring-[#23A55A]/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        //disabled state
        "disabled:bg-[#23A55A]/50 disabled:cursor-not-allowed disabled:shadow"
      )}
      onClick={joinRoom}
    >
      Unirse
    </button>
  );
};
