// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC90EEBVj1Llm0BpAPEwJSUAqklPfdjQE4",
  authDomain: "older-sister-aabd2.firebaseapp.com",
  projectId: "older-sister-aabd2",
  storageBucket: "older-sister-aabd2.appspot.com",
  messagingSenderId: "294985993726",
  appId: "1:294985993726:web:77b2f612eefcb8bc0084af",
  measurementId: "G-7NC9Z8BJSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
// Initialize Firestore
const db = getFirestore(app);

export default db;
