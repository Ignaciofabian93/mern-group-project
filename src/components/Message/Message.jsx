import React from "react";
import useMessage from "../../hooks/useMessage";

export const Message = () => {
  const { username, messages } = useMessage();

  return (
    <div className="h-full overflow-auto text-white flex flex-col gap-8">
      {messages.map((message, index) => (
        <div key={index} className="w-full">
          <div className="flex gap-5 text-black dark:text-white">
            {username && message && (
              <p className="font-normal text-sm text-gray-500">{username}</p>
            )}
            <p className="bg-slate-300 rounded-lg flex items-center py-2 px-3 dark:bg-slate-700 transition duration-500 ">
              {message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
