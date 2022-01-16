import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, storage } from "../init/firebaseinit";
import firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  confirmPasswordReset,
  reauthenticateWithCredential,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  ForgotPassword: () => Promise,
  reauthenticat: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    });

    return () => {
      unscubcribe();
    };
  }, []);
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    localStorage.removeItem("currentUser");
    return signOut(auth);
  }

  const reauthenticat = (CurruntPassword) => {
    var cred = signInWithEmailAndPassword(
      auth,
      currentUser.email,
      CurruntPassword
    );
    return reauthenticateWithCredential(currentUser, cred);
  };

  function ForgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    ForgotPassword,
    reauthenticat,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
