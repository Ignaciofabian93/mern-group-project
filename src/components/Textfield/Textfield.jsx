import React from "react";
import clsx from "clsx";

const Textfield = ({ onChange, name, type, placeholder, value }) => {
  return (
    <>
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          {placeholder}
        </span>

        <input
          onChange={onChange}
          name={name}
          type={type}
          value={value}
          className={clsx(
            "mt-1 block w-96 py-3 pl-4",
            "bg-white border",
            "border-slate-300 rounded-md",
            "text-sm shadow-sm placeholder-slate-400",
            "focus:outline-none",
            "focus:border-sky-500",
            "focus:ring-1 focus:ring-sky-500",
            "disabled:bg-slate-50",
            "disabled:text-slate-500",
            "disabled:border-slate-200",
            "disabled:shadow-none"
          )}
        />
      </label>
    </>
  );
};

export default Textfield;
