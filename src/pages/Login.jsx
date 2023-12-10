import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";
import ButtonGoogle from "../components/Buttons/ButtonGoogle";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, handleGoogleLogin, loginData, handleLoginData } =
    useLogin();
  return (
    <AuthLayout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl">App</h1>
        <div className="w-full flex flex-col items-center mb-8">
          <Textfield
            name={"email"}
            onChange={handleLoginData}
            value={loginData.email}
            type={"email"}
          />
          <Textfield
            name={"password"}
            onChange={handleLoginData}
            value={loginData.password}
            type={"password"}
          />
        </div>
        <div className="flex flex-col">
          <Button text={"Entrar"} onClick={handleLogin} />
          <ButtonGoogle
            text={"Entrar con Google"}
            onClick={handleGoogleLogin}
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
