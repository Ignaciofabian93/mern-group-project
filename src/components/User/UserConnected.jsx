import React from "react";
// import DropDown from "../DropDown/DropDown";
import useUser from "../../hooks/useUser";

export const UserConnected = () => {
  const { user } = useUser();
  return (
    <div className="w-full flex items-center justify-around bg-slate-200">
      <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
        {user && (
          <img src={user.photo} alt="profile" className="w-full h-full" />
        )}
      </div>
      <div className="flex flex-col">
        {user && (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        )}
      </div>
    </div>
  );
};
