import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../Modules/firebaseModule"

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, []);



    return (
        <userAuthContext.Provider value={{user, signup, login, logout}}>
            { children}
        </userAuthContext.Provider>
        )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}