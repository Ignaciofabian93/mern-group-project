import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../context/authContext";

const useUser = () => {
  const { user } = useContext(Authcontext);
  const [profilePicture, setProfilePicture] = useState("");
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

  return {
    user,
    updatedPassword,
    profilePicture,
    handleNewPassword,
    handleProfilePicture,
  };
};

export default useUser;
