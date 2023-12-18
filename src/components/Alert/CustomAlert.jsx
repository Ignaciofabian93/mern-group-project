import React from "react";

const CustomAlert = ({ message }) => {
  return (
    <div className="border-2 bg-slate-300 w-fit h-fit absolute top-100 text-red">
      {message}
    </div>
  );
};

export default CustomAlert;
