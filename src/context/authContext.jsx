import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/config";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(app, (currentUser) => {
  //     console.log(currentUser);
  //     if (currentUser) {
  //       getToken();
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, [token]);

  // const getToken = async () => {
  //   if (app.currentUser) {
  //     const token = await app.currentUser.getIdToken();
  //     setToken(token);
  //   }
  // };

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(app, email, password);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(app, email, password);

  const logOut = () => signOut(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(app);
      const response = await signInWithPopup(auth, provider);
      console.log("response: ", response);
      if (response.user) {
        setUser({
          name: response.user.displayName,
          email: response.user.email,
          photo: response.user.photoURL,
          uid: response.user.uid,
        });
      }
      console.log("user!: ", user);
    } catch (error) {
      throw new Error(`Error al intentar iniciar sesion: ${error}`);
    }
  };
  return (
    <Authcontext.Provider
      value={{ handleGoogleLogin, user, logOut, loginUser, registerUser }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
