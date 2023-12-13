import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Textfield from "../components/Textfield/Textfield";
import useLogin from "../hooks/useLogin";
import { Button } from "../components/Buttons/Button";
<<<<<<< HEAD
import { LogoAuth } from "../components/Icons/LogoAuth";
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import LogoAuth from "../components/Icons/LogoAuth";
import { registerBackground } from "../constants/images";

>>>>>>> 6e3af71e9b2ff9a46ee16098a1590ddaf18a2d92
const Register = () => {
  const { handleRegister, handleData, userData } = useLogin();
  return (
    <AuthLayout>
<<<<<<< HEAD
      <main className="w-full h-full flex flex-col items-center justify-center gadien bg-[#5C6069]">
        <div className="flex">
          <section>
            <img
              className="w-[640px] h-[850px] opacity-70 shadow-2xl"
              src="/src/assets/img/Register.jpg"
              alt=""
            />
          </section>
          <section className="flex flex-col items-center bg-white w-[640px] h-[850px] justify-center  shadow-2xl">
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
            <div className="flex flex-col">
              <Button text={"Guardar"} onClick={handleRegister} />
            <Link to={"/login"}>
              <span className="font-normal text-sm text-blue-400 pl-2 hover:underline">
                Ya tengo una cuenta
              </span>
            </Link>
            </div>
          </section>
        </div>
      </main>
=======
      {/* <main className="w-full h-full flex flex-col items-center justify-center"> */}
      <div className="flex w-full h-full">
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
              <Button text={"Guardar"} onClick={handleRegister} />
            </div>
            <Link to={"/login"}>
              <span className="font-normal text-sm text-blue-700 hover:underline">
                Ya tengo una cuenta
              </span>
            </Link>
          </div>
        </section>
      </div>
      {/* </main> */}
>>>>>>> 6e3af71e9b2ff9a46ee16098a1590ddaf18a2d92
    </AuthLayout>
  );
};

export default Register;
