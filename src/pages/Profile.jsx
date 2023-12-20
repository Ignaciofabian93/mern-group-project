import React from "react";
import { MainLayout } from "../Layouts";
import { useUser } from "../hooks";
import Textfield from "../components/Textfield/Textfield";
import { CustomButton } from "../components/Buttons/Button";
import CustomAlert from "../components/Alert/CustomAlert";

const Profile = () => {
  const {
    user,
    updatedPassword,
    handleNewPassword,
    message,
    handleUpdatePassword,
  } = useUser();

  return (
    <MainLayout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div
          className="w-full flex justify-center absolute -top-8 z-10 transition-all duration-500 ease-in-out"
          style={{
            transform:
              message !== "" ? "translateY(100%)" : "translateY(-100%)",
          }}
        >
          {message !== "" && <CustomAlert message={message} />}
        </div>
        <h1 className="text-black dark:text-white text-4xl mb-6">
          Actualizar contraseña
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center flex-col gap-4">
            <div>
              {user && (
                <p className="text-black dark:text-white">{user.name}</p>
              )}
            </div>
            <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden">
              <img src={user.photo} alt="profile" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Textfield
              name={"newPassword"}
              type={"password"}
              onChange={handleNewPassword}
              placeholder={"Nueva Contraseña"}
              value={updatedPassword.newPassword}
            />
            <Textfield
              name={"confirmPassword"}
              type={"password"}
              onChange={handleNewPassword}
              placeholder={"Confirmar Contraseña"}
              value={updatedPassword.confirmPassword}
            />
            <div className="mt-6">
              <CustomButton
                text={"Actualizar"}
                onClick={handleUpdatePassword}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
