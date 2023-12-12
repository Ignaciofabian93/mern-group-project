import React from "react";
import clsx from "clsx";
import DropDown from "../DropDown/DropDown";

export const UserConnected = ({ username, email, imgUser }) => {
  return (
    <div className=" flex bg-gray-500  dark:bg-[#1E1F22] transition duration-500 py-10 pl-10">
      <div className="flex items-center gap-4 ">
        <div>
          <img
            src="{imgUser}"
            alt=""
            className={clsx(
              "bg-slate-400",
              "w-12 h-12",
              "rounded-full",
              "cursor-pointer"
            )}
          />
        </div>
        <div>
          <p
            className={clsx(
              "font-semibold",
              "text-white",
              //dark mode
              " dark:text-white",
              "transition duration-500"
            )}
          >
            {username}
          </p>

          <p className={clsx("text-white", "dark:text-gray-500", "text-sm")}>
            {email}
          </p>
        </div>
      </div>

      <div className="pt-1">
        <DropDown />
      </div>
    </div>
  );
};
