// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm5YbGYO36f_dVnZm65EVHHRdPulzYWBU",
    authDomain: "karaoke-d026d.firebaseapp.com",
    databaseURL: "https://karaoke-d026d-default-rtdb.firebaseio.com",
    projectId: "karaoke-d026d",
    storageBucket: "karaoke-d026d.appspot.com",
    messagingSenderId: "562856757404",
    appId: "1:562856757404:web:b3fcc15c7e987be8ff8559",
    measurementId: "G-CF3NLZWGM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;