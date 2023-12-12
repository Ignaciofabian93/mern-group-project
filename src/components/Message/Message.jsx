import React from "react";
import { InputMessage } from "../InpuntMessage/InputMessage";
import useMessage from "../../hooks/useMessage";

export const Message = ({ messageInput, handleMessageInput }) => {
  const { user } = useMessage();

  return (
    <div className="flex flex-col">
      <div className="h-[750px]  mt-8 overflow-auto text-white flex flex-col gap-8">
        <div className="flex gap-5 text-black dark:text-white">
          <img
            src={user.photo}
            alt="photouser"
            className="bg-slate-400 w-12 h-12 rounded-full cursor-pointer"
          />
          <div>
            <p className="font-bold">{user.name} :</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
          </div>
        </div>
      </div>
      <div className=" pb-6 mt-5">
        <InputMessage
          messageInput={messageInput}
          handleMessageInput={handleMessageInput}
        />
      </div>
    </div>
  );
};
