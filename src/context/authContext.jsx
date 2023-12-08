import React, { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/config";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(app);
      const response = await signInWithPopup(auth, provider);
      console.log("response: ", response);
      const user = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: response.user.displayName,
          email: response.user.email,
          photo: response.user.photoURL,
        }),
      });

      const data = await user.json();
      console.log("data: ", data);
    } catch (error) {
      throw new Error(`Error al intentar iniciar sesion: ${error}`);
    }
  };
  return (
    <Authcontext.Provider value={{ handleGoogleLogin }}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
