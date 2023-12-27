// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TC3b0qdrGAN34A3NictFu4XeKgydqe4",
  authDomain: "fir-crud-ty.firebaseapp.com",
  projectId: "fir-crud-ty",
  storageBucket: "fir-crud-ty.appspot.com",
  messagingSenderId: "730877072378",
  appId: "1:730877072378:web:a187bb1ec8e30bef0e8a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)