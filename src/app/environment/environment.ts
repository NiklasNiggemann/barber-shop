// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAXaei446HYPxR1d92sbTbhI7ez4dLUW8",
  authDomain: "barbershop-12903.firebaseapp.com",
  databaseURL: "https://barbershop-12903-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "barbershop-12903",
  storageBucket: "barbershop-12903.firebasestorage.app",
  messagingSenderId: "125429696702",
  appId: "1:125429696702:web:741f1a101c3c455a91f6ef",
  measurementId: "G-JDDDGZDTK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);