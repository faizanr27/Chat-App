import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApp-RTYZ81ey16e6o3xOEsaeLWgqsJznQ",
    authDomain: "collab-hub-86438.firebaseapp.com",
    projectId: "collab-hub-86438",
    storageBucket: "collab-hub-86438.appspot.com",
    messagingSenderId: "997870717373",
    appId: "1:997870717373:web:4c3b17bd2e3c9c535cead4"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
