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
      console.log("currenUser: ", currentUser);
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

  const googleLogin = async () => await signInWithPopup(auth, provider);

  return (
    <Authcontext.Provider
      value={{
        user,
        token,
        googleLogin,
        loginUser,
        registerUser,
        logOut,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
