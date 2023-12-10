import React, { useContext } from "react";
import AuthLayout from "../Layouts/AuthLayout";
import { Authcontext } from "../context/authContext";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";

const Login = () => {
  const { handleGoogleLogin } = useContext(Authcontext);
  return (
    <AuthLayout>
      <section>
        <Textfield />
        <Textfield />
        <Button text={"Login"} onClick={handleGoogleLogin} />
      </section>
    </AuthLayout>
  );
};

export default Login;
