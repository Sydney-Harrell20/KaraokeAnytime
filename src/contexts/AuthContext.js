import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import { auth } from "../Modules/firebaseModule";
import { getName } from "../components/FirebaseFunctions/AccountDB";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    const [username, setUsername] = useState("");
    
    
    function signup(email, name, password) {
        setUsername(name);
        sessionStorage.setItem("username", username + "");
        return createUserWithEmailAndPassword(auth, email, password);
    }
    async function login(email, password) {

        sessionStorage.setItem("username", await getName(email) + "");
        setUsername(sessionStorage.getItem("username"))
        return signInWithEmailAndPassword(auth, email, password);
            
        
    }
    function logout() {
        setUsername("")
        return signOut(auth);
    }
    function forgotpassword(email) {
        return sendPasswordResetEmail(auth, email)
    }
    

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
          
                setUser(currentUser);
          
        })
        return unsubscribe;
        
    }, []);

    



    return (
        <userAuthContext.Provider value={{ user, username, signup, login, logout, forgotpassword }}>
            { children}
        </userAuthContext.Provider>
        )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}