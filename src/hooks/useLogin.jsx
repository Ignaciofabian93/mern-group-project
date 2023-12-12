import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/fetchUser";

const useLogin = () => {
  const { loginUser, handleGoogleLogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("data: ", userData);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    if (!userData.name || !userData.email || !userData.password) {
      return;
    } else {
      const response = await registerUser(userData);
      console.log("res: ", response);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await loginUser(userData.email, userData.password);
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
    userData,
    loading,
    message,
    handleData,
    handleGoogleLogin,
    handleRegister,
  };
};

export default useLogin;
