import React, { useRef } from "react";
import { ButtonSend } from "../Buttons/ButtonSend";
import { ButtonFile } from "../Buttons/ButtonFile";
import clsx from "clsx";

const InputMessage = ({ onClick, onChange, value, onChangeFile }) => {
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        onChangeFile(base64); // Emitir el valor del archivo leído
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-11/12 flex justify-center mt-10 gap-2 items-center">
      <div className="w-full">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
          className={clsx(
            /* --------- default mode -------*/
            "w-full",
            "py-2",
            "px-8",
            "rounded-full",
            "border border-transparent",
            "shadow-sm",
            "font-light",
            "bg-gray-200",
            "text-gray-700",

            /* --------- dark mode -------*/
            "dark:bg-slate-700 transition duration-300",
            "dark:text-white",

            /*---------- focus ---------------*/
            "focus:outline-none",
            "focus:border-transparent"
          )}
          value={value}
          type="text"
          placeholder="Escribe un mensaje"
          onChange={onChange}
        />
      </div>
      <div className="flex gap-2 ">
        <div>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <ButtonFile onClick={handleFileButtonClick} />
        </div>
        <ButtonSend onClick={onClick} />
      </div>
    </div>
  );
};

export default InputMessage;
