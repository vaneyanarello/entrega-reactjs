// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVB2AcgleJM8Nt_UK2yuDPN7F3NSaka5Y",
  authDomain: "entrega-reactjs-vyanarello.firebaseapp.com",
  projectId: "entrega-reactjs-vyanarello",
  storageBucket: "entrega-reactjs-vyanarello.firebasestorage.app",
  messagingSenderId: "12493352314",
  appId: "1:12493352314:web:ba08483dc525937c447ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//obtener la base de datos
export const db = getFirestore(app)