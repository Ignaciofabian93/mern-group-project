import React from "react";
import clsx from "clsx";
import { Google } from "../Icons/Google";

const ButtonGoogle = ({ text, onClick }) => {
  return (
    <button>
      <div
        className={clsx(
          //default state
<<<<<<< HEAD
          "bg-[#EBEBEB] text-[#1E1F22]",
          "py-3 w-[360px] leading",
=======
          "bg-[#B5BAC1] text-[#1E1F22]",
          "py-3 px-16 leading",
>>>>>>> 6e3af71e9b2ff9a46ee16098a1590ddaf18a2d92
          "rounded-full",
          "font-medium tracking-wide",
          "cursor-pointer",
          "inline-flex items-center justify-center",
          "relative shadow",
          "w-full",
          "flex text-center items-center",
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
    </button>
  );
};

export default ButtonGoogle;
