import React from "react";
import clsx from "clsx";

export const UserConnected = ({ username, email, imgUser }) => {
  return (
    <div className="flex items-center  gap-4 ">
      <div>
        <img
          src={imgUser}
          alt=""
          className={clsx(
            "bg-slate-400",
            "w-10 h-10",
            "rounded-full",
            "cursor-pointer"
          )}
        />
      </div>
      <div>
        <p
          className={clsx(
            "font-semibold",
            //dark mode
            " dark:text-white",
            "transition duration-500"
          )}
        >
          {username}
        </p>
        <p className={clsx("text-gray-500", "text-sm")}>{email}</p>
      </div>
    </div>
  );
};
