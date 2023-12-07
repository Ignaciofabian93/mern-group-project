import React from "react";

const Textfield = ({ value, onChange }) => {
  return (
    <input
      className="border-2 w-[400px] h-[50px]"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textfield;
