import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCyFCBPJY9Rk6v0OC_bH3YTZcrQ1rwGk0g",
  authDomain: "chat-a976d.firebaseapp.com",
  projectId: "chat-a976d",
  storageBucket: "chat-a976d.appspot.com",
  messagingSenderId: "109947376249",
  appId: "1:109947376249:web:2d8ac2bcf245d52f877aa8",
  measurementId: "G-T9ZC5TC7HN"
  };
  
  //initialize firebase
  initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const database = getFirestore();