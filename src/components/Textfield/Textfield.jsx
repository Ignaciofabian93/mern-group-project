import React from "react";
import clsx from 'clsx'

const Textfield = ({ value, onChange, name, type, placeholder }) => {
  return (
    <>
      <input
        className={clsx(
          "border-gray-300",
          "border w-80",
          "h-12 rounded-lg",
          "pl-2"
        )}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textfield;
