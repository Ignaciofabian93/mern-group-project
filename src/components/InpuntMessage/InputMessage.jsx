import React, { useRef } from "react";
import clsx from "clsx";
import { ButtonSend } from "../Buttons/ButtonSend";
import { ButtonFile } from "../Buttons/ButtonFile";

export const InputMessage = ({
  messageInput,
  handleMessageInput,
}) => {
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
    <div className="flex mt-15">
      <div className="w-full">
        <input
          className={clsx(
            "w-full",
            "py-2",
            "px-3",
            "rounded-l",
            "border border-transparent",
            "dark:bg-[#383A40] transition duration-500",
            "dark:text-white",

            //focus
            "focus:outline-none",
            "focus:border-transparent"
          )}
          value={messageInput}
          type="text"
          placeholder="Enviar mensaje"
          onChange={handleMessageInput}
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
          <div type="button" onClick={handleFileButtonClick}>
            <ButtonFile />
          </div>
        </div>
        <ButtonSend />
      </div>
    </div>
  );
};
