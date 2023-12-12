import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";
import ButtonGoogle from "../components/Buttons/ButtonGoogle";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, handleGoogleLogin, userData, handleData } = useLogin();
  return (
    <AuthLayout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl">Devs Chat</h1>
        <div className="w-full flex flex-col items-center mb-8 ">
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
        <div className="flex flex-col gap-2">
          <Button text={"Entrar"} onClick={handleLogin} />
          <ButtonGoogle
            text={"Entrar con Google"}
            onClick={handleGoogleLogin}
          />
        </div>
        <div className="mt-8">
          <Link to={"/register"}>
            <span className="italic font-bold underline">Registrarse</span>
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
