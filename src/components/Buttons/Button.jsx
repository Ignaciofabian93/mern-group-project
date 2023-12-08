import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <button className="w-[120px] h-[50px] bg-blue-950" onClick={onClick}>
      {text}
    </button>
  );
};
