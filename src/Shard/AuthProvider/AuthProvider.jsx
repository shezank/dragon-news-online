import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Components/Firebase/Firebase.init";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
      return  signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, curentUser =>{
            setUser(curentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    const info = {
        user,
        createUser,
        singIn,
        logOut, 
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;