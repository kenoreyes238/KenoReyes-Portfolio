import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlvjMZ6x3SNG5hITLR5MBAaRhS9McPpzo",
  authDomain: "portfolio-80a5e.firebaseapp.com",
  projectId: "portfolio-80a5e",
  storageBucket: "portfolio-80a5e.appspot.com",
  messagingSenderId: "987245283878",
  appId: "1:987245283878:web:5751aaaad180fb9355b4e7",
  measurementId: "G-GPJEKLDVHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };