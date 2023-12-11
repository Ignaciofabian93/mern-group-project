import React from "react";
import clsx from "clsx";
import { Google } from "../Icons/Google";

const ButtonGoogle = ({ text, onClick }) => {
  return (
    <google>
      <div
        className={clsx(
          //default state
          "bg-[#B5BAC1] text-[#1E1F22]",
          "py-3 px-10 leanding",
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
          "ring-[#B5BAC1]/70 ring-offset-2",
          "focus-visible:ring-2 focus:scale-[0.98]",
          //disabled state
          "disabled:bg-[#B5BAC1]/50 disabled:cursor-not-allowed disabled:shadow"
          //icon
        )}
        onClick={onClick}
      >
        {text}
        <div className="pl-5">
          <Google />
        </div>
      </div>
    </google>
  );
};

export default ButtonGoogle;
