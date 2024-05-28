// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCODCpw6QTyE-RKnBpLBZFYnLT_KeX8X7g",
  authDomain: "dropoff-b59ba.firebaseapp.com",
  databaseURL: "https://dropoff-b59ba-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "dropoff-b59ba",
  storageBucket: "dropoff-b59ba.appspot.com",
  messagingSenderId: "484670927308",
  appId: "1:484670927308:web:4c8d1b51172b3b77ec6d69",
  measurementId: "G-Q6K1GB8B8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("la app es: ", app)
const db = getFirestore(app);
console.log("la db es: ", app)
export {db};