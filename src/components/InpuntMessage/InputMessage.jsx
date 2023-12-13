import React, { useRef } from "react";
import { ButtonSend } from "../Buttons/ButtonSend";
import { ButtonFile } from "../Buttons/ButtonFile";
import clsx from "clsx";

const InputMessage = ({ onClick, onChange, value }) => {
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

            /* --------- dark mode -------*/
            "dark:bg-[#334155] transition duration-500",
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
            className="input-field"
            hidden
            onChange={handleFileInputChange}
            ref={fileInputRef}
          />
          <div type="button" onClick={handleFileButtonClick}>
            <ButtonFile />
          </div>
        </div>
        <ButtonSend onClick={onClick} />
      </div>
    </div>
  );
};

export default InputMessage;
