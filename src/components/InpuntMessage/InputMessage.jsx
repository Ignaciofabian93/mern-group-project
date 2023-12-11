import React from "react";
import clsx from "clsx";
import { ButtonSend } from "../Buttons/ButtonSend";
import { ButtonFile } from "../Buttons/ButtonFile";

export const InputMessage = () => {
  return (
    <div className="flex">
      <div className="w-full">
        <input
          className={clsx(
            "w-full",
            "py-2",
            "px-3",
            "rounded-l",
            "border border-transparent",
            "bg-[#383A40]",
            "text-white",

            //focus
            "focus:outline-none",
            "focus:border-transparent"
          )}
          type="text"
          placeholder="Enviar mensaje"
        />
      </div>
      <div className="flex gap-10">
        <ButtonFile />
        <ButtonSend />
      </div>
    </div>
  );
};
