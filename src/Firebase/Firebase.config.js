// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhV4uG4yHteGr2njhwqKlju_CMRrPQ5w0",
  authDomain: "atuomobile-brand-shop.firebaseapp.com",
  projectId: "atuomobile-brand-shop",
  storageBucket: "atuomobile-brand-shop.appspot.com",
  messagingSenderId: "106004443622",
  appId: "1:106004443622:web:6100f56c9590e4f53d6627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app