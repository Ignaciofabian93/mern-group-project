import { useState } from "react";
import useLogin from "./useLogin";

const useUser = () => {
  const { user } = useLogin();
  const [users, setUsers] = useState([]);

  return { users, user };
};

export default useUser;
