import React, { useRef } from "react";
import { MainLayout } from "../Layouts";
import { useUser } from "../hooks";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "@nextui-org/react";
import CustomAlert from "../components/Alert/CustomAlert";

const Profile = () => {
  const fileRef = useRef();
  const {
    user,
    updatedPassword,
    handleNewPassword,
    handleProfilePicture,
    profilePicture,
    handleUpdatePassword,
    message,
  } = useUser();

  const handleFileButton = () => {
    fileRef.current.click();
  };

  return (
    <MainLayout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-black dark:text-white text-4xl">
          Actualizar perfil
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center flex-col gap-4">
            <div>
              {user && (
                <p className="text-black dark:text-white">{user.name}</p>
              )}
            </div>
            <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden">
              <img
                src={profilePicture}
                alt="profile"
                className="w-full h-full cursor-pointer hover:opacity-80"
                onClick={handleFileButton}
              />
              <input
                type="file"
                accept="image/*"
                className="input-field"
                hidden
                onChange={handleProfilePicture}
                ref={fileRef}
              />
            </div>
            <div>
              {user && <p className="text-white mt-4 text-xl">{user.name}</p>}
            </div>
            <div className="mt-4">
              <Button
                onClick={handleFileButton}
                className=" bg-sky-950 text-white"
              >
                Cambiar foto
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div className="mb-4">
              <Textfield
                name={"newPassword"}
                type={"password"}
                onChange={handleNewPassword}
                placeholder={"Nueva Contraseña"}
                value={updatedPassword.newPassword}
              />
            </div>
            <div className="mb-4">
              <Textfield
                name={"confirmPassword"}
                type={"password"}
                onChange={handleNewPassword}
                placeholder={"Confirmar Contraseña"}
                value={updatedPassword.confirmPassword}
              />
            </div>
            <div className="mt-6">
              <Button
                className="bg-sky-950 text-white"
                onClick={handleUpdatePassword}
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
        {message !== "" && <CustomAlert message={message} />}
      </section>
    </MainLayout>
  );
};

export default Profile;
