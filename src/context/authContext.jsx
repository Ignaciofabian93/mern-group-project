import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getToken();
      } else {
        setUser(null);
      }
    });
  }, [token]);

  const getToken = async () => {
    if (auth.currentUser) {
      const token = await auth.currentUser.getIdToken();
      setUser({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photo: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      });
      setToken(token);
    }
  };

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
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
