import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    // create user
    const createUser = (email, pasword) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pasword);
    }

    // singin user
    const singIn = (email,pasword)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pasword)
    }


      // Google Login
      const googleLogIn =() =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('use in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return() => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, loading, singIn, logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;