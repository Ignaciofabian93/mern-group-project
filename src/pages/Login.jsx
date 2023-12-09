import React, { useContext } from "react";
import { Authcontext } from "../context/authContext";
import MainLayout from "../Layouts/MainLayout";

const Login = () => {
  const { handleGoogleLogin } = useContext(Authcontext);
  return (
    <MainLayout>
      <button onClick={handleGoogleLogin}>Login</button>
    </MainLayout>
  );
};

export default Login;
