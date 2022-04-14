// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGIT7cKyLEtYbp61Dwbz8dDhOZFyM1_cA",
  authDomain: "genius-car-services-9b9ca.firebaseapp.com",
  projectId: "genius-car-services-9b9ca",
  storageBucket: "genius-car-services-9b9ca.appspot.com",
  messagingSenderId: "646947942405",
  appId: "1:646947942405:web:17bbac8030c1ecd585ac6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
