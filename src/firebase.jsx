import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "kr-portfolio-4ca8d.firebaseapp.com",
  projectId: "kr-portfolio-4ca8d",
  storageBucket: "kr-portfolio-4ca8d.appspot.com",
  messagingSenderId: "553283437351",
  appId: "",
  measurementId: "G-9BFYVX345L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};