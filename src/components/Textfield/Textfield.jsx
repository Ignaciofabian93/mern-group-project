import React from "react";

const Textfield = ({ value, onChange, name, type }) => {
  return (
    <input
      className="border-2 w-[400px] h-[50px]"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Textfield;
