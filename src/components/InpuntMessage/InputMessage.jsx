import React, { useRef } from "react";
import clsx from "clsx";
import { ButtonSend } from "../Buttons/ButtonSend";
import { ButtonFile } from "../Buttons/ButtonFile";

export const InputMessage = () => {
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    // Aquí puedes manejar la lógica cuando se selecciona un archivo
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <div className="flex">
      <div className="w-full">
        <input
          className={clsx(
            "w-full",
            "py-2",
            "px-3",
            "rounded-l",
            "dark:border border-transparent",
            "dark:bg-[#383A40]",
            "dark:text-white",

            //focus
            "focus:outline-none",
            "focus:border-transparent"
          )}
          type="text"
          placeholder="Enviar mensaje"
        />
      </div>
      <div className="flex gap-5">
        <div>
          <input
            type="file"
            className="input-field"
            hidden
            onChange={handleFileInputChange}
            ref={fileInputRef}
          />
          <button type="button" onClick={handleFileButtonClick}>
            <ButtonFile />
          </button>
        </div>
        <ButtonSend />
      </div>
    </div>
  );
};
