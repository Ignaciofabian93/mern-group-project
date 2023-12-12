import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../api/fetchUser";

const useLogin = () => {
  const { loginUser, googleLogin, logOut, user } = useContext(Authcontext);
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
      alert("Todos los campos son obligatorios");
    } else {
      const response = await saveUser(userData);
      console.log("res: ", response);
      if (response.message === "User created succesfully") {
        alert("Usuario creado correctamente");
        setMessage("Usuario creado correctamente");
        navigate("/login");
      } else {
        alert("Error al crear usuario");
        setMessage("Error al crear usuario");
      }
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await loginUser(userData.email, userData.password);
      if (response.user.uid) {
        setLoading(false);
        setMessage("Bienvenido(a)");
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

  const handleGoogleLogin = async () => {
    const response = await googleLogin();
    if (response.user.uid) {
      setMessage("Bienvenido(a)");
      navigate("/");
    } else {
      setMessage("Error al iniciar sesión con Google");
      alert("Error al iniciar sesion con Google");
    }
  };

  return {
    user,
    handleLogin,
    userData,
    loading,
    message,
    handleData,
    handleGoogleLogin,
    handleRegister,
    logOut,
  };
};

export default useLogin;
