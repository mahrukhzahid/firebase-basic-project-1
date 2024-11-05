
//4 things are in this file, import, export, firebaseconfig,initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {
   getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut

} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0UmUlJA7_R20GWbeoMn72MIYRzLH9n4s",
  authDomain: "first-project-ff8f1.firebaseapp.com",
  projectId: "first-project-ff8f1",
  storageBucket: "first-project-ff8f1.appspot.com",
  messagingSenderId: "32440810377",
  appId: "1:32440810377:web:f6671ae2eac708c5c7bf58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut}
