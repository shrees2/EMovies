// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjfwJVbR0LjY6Is8CxAmwcIFmGPaH4rNA",
  authDomain: "nextreel-swetha.firebaseapp.com",
  projectId: "nextreel-swetha",
  storageBucket: "nextreel-swetha.firebasestorage.app",
  messagingSenderId: "324376699099",
  appId: "1:324376699099:web:26ed88b245715b1ef02cfe",
  measurementId: "G-RH1175627J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
// Export both auth and googleProvider
export { auth, googleProvider, db };
