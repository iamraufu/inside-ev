// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCu5KhtC-Aje_ipHSrbnvjAxe3DeyFidrc",
    authDomain: "opsapps-images.firebaseapp.com",
    projectId: "opsapps-images",
    storageBucket: "opsapps-images.appspot.com",
    messagingSenderId: "1032121091911",
    appId: "1:1032121091911:web:5ede42cf59c7976c996e62"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth };