import { useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);

  return { users };
};

export default useUser;
