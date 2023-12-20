import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import { CustomButton } from "../components/Buttons/Button";
import ButtonGoogle from "../components/Buttons/ButtonGoogle";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import LogoAuth from "../components/Icons/LogoAuth";
import { loginBackground } from "../constants/images";
import CustomAlert from "../components/Alert/CustomAlert";

const Login = () => {
  const { handleLogin, handleGoogleLogin, userData, handleData, message } =
    useLogin();
  return (
    <AuthLayout>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div
          className="w-full flex justify-center absolute -top-8 z-10 transition-all duration-500 ease-in-out"
          style={{
            transform:
              message !== "" ? "translateY(100%)" : "translateY(-100%)",
          }}
        >
          {message !== "" && <CustomAlert message={message} />}
        </div>
        <div className="w-full h-full flex">
          <section className="w-1/2 h-screen flex justify-end">
            <img
              className="w-auto h-full opacity-70 shadow-2xl"
              src={loginBackground}
              alt="login-background"
            />
          </section>
          <section className="flex flex-col items-center bg-white w-1/3 h-screen justify-center  shadow-2xl">
            <div className="flex flex-col items-center mb-10 gap-5">
              <h1 className="text-4xl font-bold pb-10">ConnectDevs</h1>
              <LogoAuth />
            </div>
            <div className="w-full flex gap-3 flex-col items-center mb-8 ">
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
            <div>
              <div className="flex flex-col gap-2 mb-4">
                <CustomButton text={"Iniciar sesión"} onClick={handleLogin} />
                <ButtonGoogle
                  onClick={handleGoogleLogin}
                  text={"Iniciar sesión con Google"}
                />
              </div>
              <div className="w-full flex justify-center">
                <Link to={"/register"}>
                  <span className="font-normal text-sm text-blue-700 pl-2 hover:underline">
                    Registrarse
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AuthLayout>
  );
};

export default Login;
