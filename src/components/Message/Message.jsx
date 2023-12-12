import React from "react";
import { InputMessage } from "../InpuntMessage/InputMessage";
import useMessage from "../../hooks/useMessage";

export const Message = ({ messageInput, handleMessageInput }) => {
  const { user } = useMessage();

  return (
    <div>
      <div className="h-[750px]  mt-8 overflow-auto text-white flex flex-col gap-8">
        <div className="flex gap-5 text-black dark:text-white">
          {/* <img
            src={user.photo}
            alt="photouser"
            className="bg-slate-400 w-12 h-12 rounded-full cursor-pointer"
          />
          <div className="flex flex-col gap-2">
            {/* <p className="font-normal text-sm text-gray-500">{user.name} :</p> */}
          <p className="font-normal text-sm text-gray-500">David Martinez</p>
          <p className="bg-slate-300 rounded-lg flex items-center py-2 px-3 dark:bg-slate-700 transition duration-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde
            adipisci error minima placeat quasi repellat quae aspernatur
            officiis recusandae?
          </p>

          <div>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
            <p>Mensaje Iterado</p>
          </div>
        </div>
      </div>
      <div className=" mt-5 px-10">
        <InputMessage
          messageInput={messageInput}
          handleMessageInput={handleMessageInput}
        />
      </div>
    </div>
  );
};
