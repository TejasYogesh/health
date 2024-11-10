import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { signOut as firebaseSignOut } from "firebase/auth"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBWoInDoIW6UfUZ-vQwM1x95ZrHDPl3T-4",
    authDomain: "online-assessment-91061.firebaseapp.com",
    projectId: "online-assessment-91061",
    storageBucket: "online-assessment-91061.firebasestorage.app",
    messagingSenderId: "222466168515",
    appId: "1:222466168515:web:0033a2e56aa43cb6c5b476",
    measurementId: "G-JZ6WYR0M5T"
};
export const useFirebase = () => {
    return useContext(FirebaseContext);
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

// Create a custom hook for easier access to Firebase context


export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, [])




    // const [user, setUser] = useState(null);
    const signUpWithUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signInWithGoogleProvider = () => {
        signInWithPopup(firebaseAuth, googleAuthProvider);
    }
    const signOut = () => {
        return firebaseSignOut(firebaseAuth);
    }
    const isLoggedIn = user ? true : false;
    return (
        <FirebaseContext.Provider value={{
            signUpWithUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            signInWithGoogleProvider,
            isLoggedIn,
            signOut,
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};