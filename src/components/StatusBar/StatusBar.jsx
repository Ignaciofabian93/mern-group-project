import React from "react";

export const StatusBar = ({ text }) => {
  return (
    <div className="w-full h-8 flex items-center">
      <p className="font-normal dark:text-white transition duration-500">
        {text}
      </p>
    </div>
  );
};
