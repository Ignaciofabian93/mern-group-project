import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import useLogin from "../../hooks/useLogin";

const UserConnected = () => {
  const { handleLogOut } = useLogin();
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className="relative w-11/12 h-full flex items-center justify-around rounded-md px-4 cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#1E1F22] text-white"
      onClick={handleOpen}
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
      {open && (
        <div className="absolute top-[84px] right-0 mt-2 w-56 bg-white dark:bg-[#1E1F22] border border-gray-300 dark:border-gray-700 rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-out">
          <div className="py-2 px-4">
            <span className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white py-1 transition-all duration-300">
              Configuración
            </span>
            <span
              onClick={handleLogOut}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white py-1 transition-all duration-300"
            >
              Salir
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserConnected;
