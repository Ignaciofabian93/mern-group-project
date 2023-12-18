import React from "react";
import useUser from "../../hooks/useUser";
import clsx from "clsx";
import { UserIcon } from "../../constants/icons";

const UserConnected = () => {
  const { user } = useUser();

  return (
    <div
      className={clsx(
        /* ----- default -----*/
        "ease-in-out",
        "shadow-lg",
        "w-full h-[90px]",
        "rounded-2xl",
        "text-white",
        "flex items-center justify-start",
        "px-6",
        "bg-[#5cb0da]",

        /* ----- Transition -----*/
        "transition duration-300",

        /* ----- dark mode -----*/
        "dark:bg-[#334155]",
        "dark:shadow-md"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-[65px] h-[65px] rounded-[50%] overflow-hidden">
          {user && (
            <img
              src={user.photo ? user.photo : UserIcon}
              alt="profile"
              className="w-full h-full"
            />
          )}
        </div>
        <div className="flex flex-col">
          {user && (
            <>
              <p className="text-lg text-[#white] font-normal dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-[#414347] dark:text-[#94A3B8]">
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
