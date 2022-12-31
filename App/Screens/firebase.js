// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbgMkTXuGWrP8CQQtXgNYOL1sfw90ILKg",
  authDomain: "bhealthy-94210.firebaseapp.com",
  databaseURL: "https://bhealthy-94210-default-rtdb.firebaseio.com",
  projectId: "bhealthy-94210",
  storageBucket: "bhealthy-94210.appspot.com",
  messagingSenderId: "1075567348845",
  appId: "1:1075567348845:web:53efccea0c2c45d0078364",
  measurementId: "G-PRE1YVXMXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
const db = getFirestore();

