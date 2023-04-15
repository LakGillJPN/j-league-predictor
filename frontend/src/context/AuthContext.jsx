import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut
       } 
from "firebase/auth";
import { auth } from "../firebase/firebase";
import { createContext, useContext, useState, useEffect} from "react";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState('')

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //this all goes in the server
  const loginUser = async (email, password) => {
    //const userCred = await(signInWithEmailAndPassword(auth, email, password))
    //console.log(userCred)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, 
      (currentUser) => {
        console.log(currentUser)
        setUser(currentUser);
        setUserEmail(currentUser.email)
    })
    return authenticatedUser;
  },[]);

  return <UserContext.Provider value = {
    {createUser, 
    loginUser, 
    user, 
    userEmail,
    logOut
    }}>
    {children}
  </UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}