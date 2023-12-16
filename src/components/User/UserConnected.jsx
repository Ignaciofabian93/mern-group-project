import React, { useRef, useState } from "react";
import useUser from "../../hooks/useUser";
import clsx from "clsx";
import { UserIcon } from "../../constants/icons";
import { Tooltip } from "@nextui-org/react";

const UserConnected = () => {
  const ref = useRef(null);
  const { user } = useUser();
  const [file, setFile] = useState(null);

  const handleClick = () => {
    ref.current.click();
  };

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        console.log("base64: ", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("file: ", file);
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
      <div className="flex gap-3">
        <Tooltip placement="bottom" content="Actualizar foto">
          <div
            className="w-[50px] h-[50px] rounded-[50%] overflow-hidden cursor-pointer"
            onClick={handleClick}
          >
            {user && (
              <>
                <img
                  src={user.photo ? user.photo : UserIcon}
                  alt="profile"
                  className="w-full h-full"
                />
                <input
                  ref={ref}
                  type="file"
                  onChange={(e) => handleProfilePicture(e)}
                  accept="image/*"
                  className="w-full h-full"
                  id="profile-picture"
                  name="profile-picture"
                  multiple={false}
                  hidden={false}
                />
              </>
            )}
          </div>
        </Tooltip>
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
