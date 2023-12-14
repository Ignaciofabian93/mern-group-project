import React from "react";
import clsx from "clsx";

const CustomSelect = ({ rooms, onChange, value }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-[280px]">
        <label className="block mb-2 font-medium text-gray-900 dark:text-white">
          Selecione un grupo
        </label>
        <select
          name="room"
          onChange={onChange}
          value={value}
          className={clsx(
            /* ----default theme -----*/
            "bg-gray-50",
            "border border-gray-300",
            "text-gray-900 text-sm",
            "block w-full p-2.5",
            "rounded-lg",
            "shadow-md",
            "transition duration-300",
            /* ----focus theme -----*/
            "focus:ring-blue-500",
            "focus:border-blue-500",
            /* ----dark theme -----*/
            "dark:bg-gray-700",
            "dark:border-gray-600",
            "dark:placeholder-gray-400",
            "dark:text-white",
            "dark:focus:ring-blue-500",
            "dark:focus:border-blue-500"
          )}
        >
          {rooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
