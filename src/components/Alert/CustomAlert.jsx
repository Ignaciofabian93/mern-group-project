import React from "react";

const CustomAlert = ({ message }) => {
  return (
    <div className="bg-slate-700 text-white w-fit h-fit p-4 rounded-xl transition-all duration-500 ease-in-out">
      {message}
    </div>
  );
};

export default CustomAlert;
