import React from "react";
import clsx from "clsx";

export const InputMessage = () => {
  return (
    <div className=" px-24 pt-96 pb-20 ">
      <input
        className={clsx(
          "w-full",
          "py-2",
          "px-3",
          "rounded-lg",
          "border border-transparent",
          "bg-[#383A40]",
          "text-white",

          //focus
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-[#4752C4]",
          "focus:border-transparent"
        )}
        type="text"
        placeholder="Enviar mensaje a"
      />
    </div>
  );
};
