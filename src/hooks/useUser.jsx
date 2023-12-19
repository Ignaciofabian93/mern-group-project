import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/authContext";

const useUser = () => {
  const { user, updateUserPassword } = useContext(Authcontext);
  const [profilePicture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setProfilePicture(user.photo);
    }
  }, [user]);

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setProfilePicture(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewPassword = (e) => {
    const { name, value } = e.target;
    setUpdatedPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdatePassword = async () => {
    if (updatedPassword.newPassword !== updatedPassword.confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    } else {
      try {
        const response = await updateUserPassword(updatedPassword.newPassword);
        console.log("RES: ", response);
        if (response === "undefined") {
          setMessage("Contraseña actualizada");
          setUpdatedPassword({
            newPassword: "",
            confirmPassword: "",
          });
        } else {
          alert("Es necesario un inicio de sesión reciente con Google");
        }
      } catch (error) {
        setMessage(
          "Es necesario un inicio de sesión reciente con Google para cambiar la contraseña"
        );
      }
    }
  };

  return {
    user,
    updatedPassword,
    profilePicture,
    handleNewPassword,
    handleProfilePicture,
    handleUpdatePassword,
    message,
  };
};

export default useUser;
