import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  User as firebaseAuthUser
} from "firebase/auth";
import { auth } from "../firebase/firebase.ts";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import getPredications from '../utils/get-predications.ts';

interface AuthContextProps {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  user: firebaseAuthUser | null;
  userEmail: string | null;
  userPredications: any;
}

const UserContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<firebaseAuthUser | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // To check if the user has predicted a score
  const [userPredications, setUserPredications] = useState<any[]>([]);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // This all goes in the server
  const loginUser = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, (currentUser: firebaseAuthUser | null) => {
      setUser(currentUser);
      setUserEmail(currentUser?.email || null);
    });

    if (userEmail !== null) {
      getPredications(setUserPredications, userEmail);
    }

    return authenticatedUser;
  }, [userEmail]);

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        userPredications,
        user,
        userEmail,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = (): AuthContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};
