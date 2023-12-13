import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";
import ButtonGoogle from "../components/Buttons/ButtonGoogle";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import LogoAuth from "../components/Icons/LogoAuth";
import { loginBackground } from "../constants/images";

const Login = () => {
  const { handleLogin, handleGoogleLogin, userData, handleData } = useLogin();
  return (
    <AuthLayout>
      <main className="w-full h-full flex flex-col items-center justify-center">
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
            <div className="w-10/12">
              <div className="flex flex-col gap-2 mb-4">
                <Button text={"Iniciar sesión"} onClick={handleLogin} />
                <ButtonGoogle
                  onClick={handleGoogleLogin}
                  text={"Iniciar sesión con Google"}
                />
              </div>
              <div className="w-full flex justify-center">
                <Link to={"/register"}>
                  <span className="font-bold text-sm text-blue-700 pl-2 hover:underline">
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
