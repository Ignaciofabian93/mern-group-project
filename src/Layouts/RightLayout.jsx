import React from "react";
import clsx from "clsx";

const RightLayout = ({ children }) => {
  return (
    <div
      className={clsx(
        /*-------- default config  ------*/
        "bg-white",
        "w-full h-full",
        "pb-4 pr-4",
        /*-------- dark mode config  ------*/
        "dark:bg-[#182234]"
      )}
    >
      {children}
    </div>
  );
};

export default RightLayout;
