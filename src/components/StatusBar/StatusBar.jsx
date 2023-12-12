import React from "react";
import { History } from "../Icons/History";

export const StatusBar = ({ text }) => {
  return (
    <div className="w-full h-8 flex items-center justify-between py-5 pr-10   transition duration-400  ">
      <p className="font-normal pl-5 dark:text-white transition duration-500 ">
        {text}
      </p>

      <div className="flex gap-5 items-center">
        <p className="dark:text-white">History</p>
        <History />
      </div>
    </div>
  );
};
