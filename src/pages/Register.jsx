import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import useLogin from "../hooks/useLogin";
import { Button } from "../components/Buttons/Button";

const Register = () => {
  const { handleRegister, handleData, userData } = useLogin();
  return (
    <AuthLayout>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl">Devs Chat</h1>
        <div className="w-full flex flex-col items-center mb-8 ">
          <Textfield
            placeholder={"Nombre"}
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
        <div className="flex flex-col gap-2">
          <Button text={"Guardar"} onClick={handleRegister} />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Register;
