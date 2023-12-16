// import { useState } from "react";
import { useState } from "react";
import useLogin from "./useLogin";

const useUser = () => {
  const { user } = useLogin();
  const [profilePicture, setProfilePicture] = useState("");

  return { user };
};

export default useUser;
