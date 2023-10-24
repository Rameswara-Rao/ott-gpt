// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYou0LO3f0P53wBLfaG908b3PQoeWPAO4",
  authDomain: "ootgpt-3d0f2.firebaseapp.com",
  projectId: "ootgpt-3d0f2",
  storageBucket: "ootgpt-3d0f2.appspot.com",
  messagingSenderId: "70245370494",
  appId: "1:70245370494:web:1a8a8b6b0aaf62a1ac662f",
  measurementId: "G-65ZJQKBFHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
