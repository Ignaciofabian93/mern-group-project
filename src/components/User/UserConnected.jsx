import React from "react";
import useUser from "../../hooks/useUser";
import clsx from "clsx";

const UserConnected = () => {
  const { user } = useUser();

  return (
    <div
      className={clsx(
        /* ----- default -----*/
        "ease-in-out",
        "shadow-lg",
        "w-[280px] h-[112px]",
        "cursor-pointer",
        "rounded-2xl px-4 mt-8",
        "text-white",
        "flex items-center justify-around",
        "bg-[#F8FAFC]",

        /* ----- Transition -----*/
        "transition duration-500",

        /* ----- dark mode -----*/
        "dark:bg-[#334155]",
        "dark:shadow-md"
      )}
    >
      <div className="flex gap-3">
        <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
          {user && (
            <img src={user.photo} alt="profile" className="w-full h-full" />
          )}
        </div>
        <div className="flex flex-col">
          {user && (
            <>
              <p className="text-lg text-[#334155] font-semibold dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-black dark:text-[#94A3B8]">
                {user.email}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserConnected;
