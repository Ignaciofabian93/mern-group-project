import React from "react";
import useUser from "../../hooks/useUser";
import clsx from "clsx";

const NameIcon = ({ letter }) => {
  return (
    <div className="w-[60px] h-[60px] rounded-[50%] bg-slate-800 flex items-center justify-center">
      <p className="capitalize text-3xl font-semibold">{letter}</p>
    </div>
  );
};

const UserConnected = () => {
  const { user } = useUser();

  return (
    <div
      className={clsx(
        /* ----- default -----*/
        "ease-in-out",
        "w-full h-[90px]",
        "rounded-2xl",
        "text-white",
        "flex items-center justify-center",
        // "bg-[#5cb0da]",

        /* ----- Transition -----*/
        "transition duration-300"

        /* ----- dark mode -----*/
        // "dark:bg-[#334155]",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="overflow-hidden">
          {user && user.photo && (
            <img
              src={user.photo}
              alt="profile"
              className="w-[60px] h-[60px] rounded-full"
            />
          )}
          {user && !user.photo && <NameIcon letter={user.name[0]} />}
        </div>
        <div className="flex flex-col">
          {user && (
            <>
              <p className="text-md text-[#white] font-normal dark:text-white">
                {user.name}
              </p>
              <p className="text-sm  dark:text-gray-500 flex flex-wrap">
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
