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
    } else {
      const response = await saveUser(userData);
      if (response.status === "ok") {
        setMessage("Usuario creado correctamente");
        setUserData({ name: "", email: "", password: "" });
        navigate("/login");
      } else {
        setMessage("Error al crear usuario");
      }
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    const response = await loginUser(userData.email, userData.password);
    console.log(response);
    if (response.user.uid) {
      setLoading(false);
      setMessage("Bienvenido(a)");
      navigate("/");
    } else {
      setLoading(false);
      setMessage("Credenciales incorrectas");
    }
  };

  const handleGoogleLogin = async () => {
    const response = await googleLogin();
    if (response.user.uid) {
      await sendPasswordReset(response.user.email);
      setMessage("Bienvenido(a)");
      navigate("/");
    } else {
      setMessage("Error al iniciar sesión con Google");
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
