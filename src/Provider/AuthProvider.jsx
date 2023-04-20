import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
const auth =getAuth(app)
const [user, setUser] = useState(null);
const [loader,setLoader]=useState(true)

const createUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
const login =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password);
}
const logout=()=>{
    return signOut(auth)
}
 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        return unsubscribe();
    }
 },[])



  const authInfo = { user ,createUser,login,logout,loader};

  return (

    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
