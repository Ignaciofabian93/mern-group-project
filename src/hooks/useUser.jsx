import { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";

const useUser = () => {
  const { user } = useContext(Authcontext);
  const [profilePicture, setProfilePicture] = useState("");

  return { user };
};

export default useUser;
