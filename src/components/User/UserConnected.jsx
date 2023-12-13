import React from "react";
import useUser from "../../hooks/useUser";
import clsx from "clsx";

const UserConnected = () => {
  const { user } = useUser();

  return (
    <div
      className={clsx(
        // "relative",
        "w-11/12 h-full",
        "flex items-center justify-around",
        "rounded-md px-4",
        "cursor-pointer",
        "transition-all duration-300",
        "ease-in-out",
        "dark:bg-[#1E1F22] text-white"
      )}
    >
      <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
        {user && (
          <img src={user.photo} alt="profile" className="w-full h-full" />
        )}
      </div>
      <div className="flex flex-col">
        {user && (
          <>
            <p className="text-md">{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserConnected;
