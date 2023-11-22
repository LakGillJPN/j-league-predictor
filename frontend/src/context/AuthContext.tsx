import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  User as firebaseAuthUser,
  User
} from "firebase/auth";
import { auth } from "../firebase/firebase.ts";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {getPredicationsNow } from '../utils/get-predications.ts';
import getUser from "../utils/get-users.ts";
import { Users } from "../../globals";

interface AuthContextProps {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  user: firebaseAuthUser | null;
  userEmail: string | null;
  userPredications: any;
  uid: string | null;
  userInfo: any;
}

const UserContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<firebaseAuthUser | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [uid, setUid] = useState<null | string>(null);
  const [userInfo, setUserInfo] = useState<any[]>([]);
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
      setUid(currentUser?.uid || null )
    });

    if (uid !== null) {
      getPredicationsNow(setUserPredications, uid);
      getUser(setUserInfo, uid) 
    }

    return authenticatedUser;
  }, [uid]);



  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        userPredications,
        user,
        userEmail,
        uid,
        userInfo,
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
