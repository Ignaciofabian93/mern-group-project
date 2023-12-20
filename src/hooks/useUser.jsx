import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";

const useUser = () => {
  const { user, updateUserPassword } = useContext(Authcontext);
  const [message, setMessage] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleNewPassword = (e) => {
    const { name, value } = e.target;
    setUpdatedPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdatePassword = async () => {
    if (updatedPassword.newPassword !== updatedPassword.confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    } else {
      try {
        const response = await updateUserPassword(updatedPassword.newPassword);
        console.log("Response; ", response);
        if (response === undefined) {
          setMessage("Contraseña actualizada");
          setTimeout(() => {
            setMessage("");
          }, 2000);
          setUpdatedPassword({
            newPassword: "",
            confirmPassword: "",
          });
        } else {
          setMessage("Es necesario un inicio de sesión reciente con Google");
          setTimeout(() => {
            setMessage("");
          }, 2000);
        }
      } catch (error) {
        setMessage(
          "Es necesario un inicio de sesión reciente con Google para cambiar la contraseña"
        );
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  };

  return {
    user,
    updatedPassword,
    handleNewPassword,
    handleUpdatePassword,
    message,
  };
};

export default useUser;
