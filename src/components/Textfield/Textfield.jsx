import React from "react";
import clsx from "clsx";

const Textfield = ({ value, onChange, name, type, placeholder }) => {
  return (
    <>
      <div className="relative mt-6">
        <input
          className={clsx(
            "peer w-96 border-b",
            "placeholder:text-transparent",
            "border-gray-300",
            "border rounded-lg",
            " py-4",
            "pl-4",
            "outline-none",
            "focus:border-blue-500",
            "focus:text-black",
            "transition duration-200",
            // "bg-inherit"
          )}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <label
          className={clsx(
            "absolute",
            "left-0 ml-1 -translate-y-3",
            "bg-white",
            "px-3",
            "text-sm duration-100",
            "capitalize",
            "ease-linear",
            "peer-placeholder-shown:translate-y-4",
            "peer-placeholder-shown:text-base",
            "peer-placeholder-shown:text-gray-500",
            "peer-focus:ml-1",
            "peer-focus:-translate-y-3",
            "peer-focus:px-2",
            "peer-focus:text-sm"
          )}
        >
          {name}
        </label>
      </div>
    </>
  );
};

export default Textfield;

//  <label className="relative">
//    <input
//      type={type}
//      value={value}
//      onChange={onChange}
//      name={name}
//      required
//      className={clsx(
//        "border-gray-300",
//        "border rounded-lg",
//        "w-96 py-4",
//        "pl-2",
//        "outline-none",
//        "focus:border-blue-500",
//        "focus:text-black",
//        "transition duration-200",
//        "bg-inherit"
//      )}
//    />
//    <span
//      className={clsx(
//        "text-opacity-80",
//        "text-gray-600",
//        "absolute",
//        "left-2 top-4",
//        "transition duration-200",
//        "input-text pointer-events-none",
//        "peer-valid: text-sm peer-valid: traslate-y-5"
//      )}
//    >
//      {placeholder}
//    </span>
//  </label>;
