import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { loginUser, handleGoogleLogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await loginUser(loginData.email, loginData.password);
      if (response.user.uid) {
        setLoading(false);
        setMessage("Login exitoso");
        navigate("/");
      } else {
        setLoading(false);
        setMessage("Error al iniciar sesion");
      }
    } catch (error) {
      setLoading(false);
      setMessage(error);
      throw new Error(`Error al intentar iniciar sesion: ${error}`);
    }
  };

  return {
    handleLogin,
    loginData,
    loading,
    message,
    handleLoginData,
    handleGoogleLogin,
  };
};

export default useLogin;
