import React, { useContext } from "react";
import { Authcontext } from "../context/authContext";

const Login = () => {
  const { handleGoogleLogin } = useContext(Authcontext);
  return (
    <main>
      <button onClick={handleGoogleLogin}>Login</button>
    </main>
  );
};

export default Login;
