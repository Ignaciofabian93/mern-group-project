import React from "react";
import clsx from "clsx";

const LeftLayout = ({ children }) => {
  return (
    <aside
      className={clsx(
        "w-[480px] h-full",
        "bg-gray-600",
        "border-white",
        "border-t-2",

        "dark:bg-slate-900",
        "dark:border-slate-800 dark:border-t-3"
      )}
    >
      {children}
    </aside>
  );
};

export default LeftLayout;
