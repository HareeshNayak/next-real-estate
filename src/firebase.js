// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-41ae1.firebaseapp.com",
  projectId: "next-estate-41ae1",
  storageBucket: "next-estate-41ae1.firebasestorage.app",
  messagingSenderId: "658874738156",
  appId: "1:658874738156:web:fc5b4e3fa6b64c410bccc9",
  measurementId: "G-5S01GMNW3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);