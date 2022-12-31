// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:1075567348845:web:dd6783a9e3bebe8b078364",
  measurementId: "G-JYZBZP27G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);