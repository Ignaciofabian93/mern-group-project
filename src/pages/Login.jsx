import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";
import ButtonGoogle from "../components/Buttons/ButtonGoogle";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import LogoAuth from "../components/Icons/LogoAuth";

const Login = () => {
  const { handleLogin, handleGoogleLogin, userData, handleData } = useLogin();
  return (
    <AuthLayout>
      <main className="w-full h-full flex flex-col items-center justify-center gadien bg-[#5C6069]">
        <div className="flex">
          <section>
            <img
              className="w-[640px] h-[850px] opacity-70 shadow-2xl"
              src="/src/assets/img/login.jpg"
              alt=""
            />
          </section>
          <section className="flex flex-col items-center bg-white w-[640px] h-[850px] justify-center  shadow-2xl">
            <div className="flex flex-col items-center mb-10 gap-5">
              <h1 className="text-4xl font-bold pb-10">Login</h1>
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
            <div className="">
              <div className="flex flex-col gap-2">
                <Button text={"Iniciar sesión"} onClick={handleLogin} />
                <ButtonGoogle
                  onClick={handleGoogleLogin}
                  text={"Iniciar sesión con Google"}
                />
              </div>
              <Link to={"/register"}>
                <span className="font-normal text-sm text-blue-400 pl-2 hover:underline">
                  Registrarse
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </AuthLayout>
  );
};

export default Login;
