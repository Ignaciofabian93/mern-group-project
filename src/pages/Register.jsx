import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import useLogin from "../hooks/useLogin";
import { CustomButton } from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import LogoAuth from "../components/Icons/LogoAuth";
import { registerBackground } from "../constants/images";
import CustomAlert from "../components/Alert/CustomAlert";

const Register = () => {
  const { handleRegister, handleData, userData, message } = useLogin();
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div
          className="w-full flex justify-center absolute -top-8 z-10 transition-all duration-500 ease-in-out"
          style={{
            transform:
              message !== "" ? "translateY(100%)" : "translateY(-100%)",
          }}
        >
          {message !== "" && <CustomAlert message={message} />}
        </div>
        <section className="w-1/2 h-screen flex justify-end">
          <img
            className="w-auto h-full opacity-70 shadow-2xl"
            src={registerBackground}
            alt="register-background"
          />
        </section>
        <section className="flex flex-col items-center bg-white w-1/3 h-screen justify-center  shadow-2xl">
          <div className="flex flex-col items-center mb-10 gap-5">
            <h1 className="text-4xl font-bold pb-10">Registrarse</h1>
            <LogoAuth />
          </div>
          <div className="w-full flex gap-3 flex-col items-center mb-8 ">
            <Textfield
              placeholder={"Nombre de usuario"}
              name={"name"}
              onChange={handleData}
              value={userData.name}
              type={"text"}
            />
            <Textfield
              placeholder={"Correo electrónico"}
              name={"email"}
              onChange={handleData}
              value={userData.email}
              type={"email"}
            />
            <Textfield
              placeholder={"Contraseña"}
              name={"password"}
              onChange={handleData}
              value={userData.password}
              type={"password"}
            />
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="w-full flex justify-center mb-4">
              <CustomButton text={"Guardar"} onClick={handleRegister} />
            </div>
            <Link to={"/login"}>
              <span className="font-normal text-sm text-blue-700 hover:underline">
                Ya tengo una cuenta
              </span>
            </Link>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default Register;
