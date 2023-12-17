import React from "react";

const LeftLayout = ({ children }) => {
  return (
    <aside className="w-[480px] h-full shadow-lg bg-[#5C6069] dark:bg-[#0B1120]">
      {children}
    </aside>
  );
};

export default LeftLayout;
