// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi9d1K2PDfXFE9q2U9ZjlvOjJsDZpMG4o",
  authDomain: "flight-booking-app-a6a8c.firebaseapp.com",
  projectId: "flight-booking-app-a6a8c",
  storageBucket: "flight-booking-app-a6a8c.appspot.com",
  messagingSenderId: "759768042429",
  appId: "1:759768042429:web:15e6eab4048b17e17ba0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
