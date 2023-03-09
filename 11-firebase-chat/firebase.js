import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAqae3ENw7GU7I7MEI4AdPyISgFLl1nViM",
    authDomain: "chat-app-d523b.firebaseapp.com",
    projectId: "chat-app-d523b",
    storageBucket: "chat-app-d523b.appspot.com",
    messagingSenderId: "22854053012",
    appId: "1:22854053012:web:7b93bbdb0b2163f6839881",
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const database = getFirestore();