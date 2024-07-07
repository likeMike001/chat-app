import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-48de7.firebaseapp.com",
  projectId: "react-chat-48de7",
  storageBucket: "react-chat-48de7.appspot.com",
  messagingSenderId: "1087221902348",
  appId: "1:1087221902348:web:e37659f070c8cbda045229"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


