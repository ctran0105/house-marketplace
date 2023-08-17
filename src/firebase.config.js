import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFE7-w_t6pX-glTy8tFrHfrVGuQKHOHuw",
  authDomain: "house-marketplace-app-1dcb2.firebaseapp.com",
  projectId: "house-marketplace-app-1dcb2",
  storageBucket: "house-marketplace-app-1dcb2.appspot.com",
  messagingSenderId: "515546239277",
  appId: "1:515546239277:web:f15fe2f7e7acaf54ed43a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
