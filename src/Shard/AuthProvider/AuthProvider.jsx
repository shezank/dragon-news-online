import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Components/Firebase/Firebase.init";


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerTwiteer = new TwitterAuthProvider();


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

    const googleLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, provider)
    }

    const githubLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, providerGithub)
    }

    const twiteerLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, providerTwiteer)
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
        googleLogin,
        githubLogin,
        twiteerLogin,
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