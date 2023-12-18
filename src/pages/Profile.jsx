import React, { useRef } from "react";
import { MainLayout } from "../Layouts";
import { useUser } from "../hooks";
import Textfield from "../components/Textfield/Textfield";
import { CustomButton } from "../components/Buttons/Button";

const Profile = () => {
  const fileRef = useRef();
  const {
    user,
    updatedPassword,
    handleNewPassword,
    handleProfilePicture,
    profilePicture,
  } = useUser();

  const handleFileButton = () => {
    fileRef.current.click();
  };
  return (
    <MainLayout>
      <section className="w-full h-full flex flex-col items-center">
        <h1 className="text-white text-2xl">Actualizar perfil</h1>
        <div className="flex">
          <div>
            <div>{user && <p className="text-white">{user.name}</p>}</div>
            <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden">
              <img
                src={profilePicture}
                alt="profile"
                className="w-full h-full"
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
              <CustomButton
                text={"Actualizar Foto"}
                onClick={handleFileButton}
              />
            </div>
          </div>
          <div>
            <Textfield
              name={"newPassword"}
              type={"password"}
              onChange={handleNewPassword}
              placeholder={"Nueva Contraseña"}
              value={updatedPassword.newPassword}
            />
            <Textfield
              name={"newPassword"}
              type={"password"}
              onChange={handleNewPassword}
              placeholder={"Confirmar Contraseña"}
              value={updatedPassword.confirmPassword}
            />
            <div className="mt-6">
              <CustomButton text={"Actualizar"} />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
