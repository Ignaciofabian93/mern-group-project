import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../api/fetchUser";

const useLogin = () => {
  const { loginUser, googleLogin, logOut, user, sendPasswordReset } =
    useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    if (!userData.name || !userData.email || !userData.password) {
      setMessage("Todos los campos son obligatorios");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      const response = await saveUser(userData);
      if (response.status === "ok") {
        setMessage("Usuario creado correctamente. Ya puede iniciar sesión");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        setUserData({ name: "", email: "", password: "" });
      } else {
        setMessage("Error al crear usuario");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await loginUser(userData.email, userData.password);
      if (response.user.uid) {
        setLoading(false);
        navigate("/");
      } else {
        setLoading(false);
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      setMessage("Error en inicio de sesión. Revise sus credenciales");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await googleLogin();
      if (response.user.uid) {
        await sendPasswordReset(response.user.email);
        setMessage("Bienvenido(a)");
        navigate("/");
      } else {
        setMessage("Error al iniciar sesión con Google");
      }
    } catch (error) {
      setMessage("Error al iniciar sesión con Google");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleLogOut = async () => {
    await logOut();
    navigate("/login");
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
    handleLogOut,
  };
};

export default useLogin;
