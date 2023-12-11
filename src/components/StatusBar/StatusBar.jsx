import React from "react";

export const StatusBar = ({ text }) => {
  return (
    <div className="dark:bg-[#313338] w-full h-8 flex items-center">
      <p className="pl-5 font-normal dark:text-white">{text}</p>
    </div>
  );
};
