import React, { createContext } from "react";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  return <Authcontext.Provider value={{}}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
