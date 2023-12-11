import React from "react";
import clsx from "clsx";

export const UserConnected = ({username, email}) => {
  return (
    <div className="flex gap-4 ">
      <div>
        <img
          src="/src/assets/img/user.jpg"
          alt=""
          className={clsx("bg-slate-400", "w-10 h-10", "rounded-full", "cursor-pointer")}
        />
      </div>
      <div>
        <p className={clsx("font-semibold text-white")}>{username}</p>
        <p className={clsx("text-gray-500", "text-sm")}>{email}</p>
      </div>
    </div>
  );
}
