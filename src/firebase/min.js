// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbWqizGUjBPFnGUGKS7pRLqWQy_QffbXo",
  authDomain: "fama-9b4ea.firebaseapp.com",
  databaseURL: "https://fama-9b4ea-default-rtdb.firebaseio.com",
  projectId: "fama-9b4ea",
  storageBucket: "fama-9b4ea.appspot.com",
  messagingSenderId: "623839003894",
  appId: "1:623839003894:web:f57d11bf80061a11fd98d7",
  measurementId: "G-RBCVK4HS70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

