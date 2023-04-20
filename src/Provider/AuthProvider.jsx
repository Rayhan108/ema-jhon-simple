import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confiq";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
const auth =getAuth(app)

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

  const [user, setUser] = useState(null);
  const authInfo = { user ,createUser,login};

  return (

    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
