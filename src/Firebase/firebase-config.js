import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHpqEoYIF_gm4ELq_mL6IyGwd97E-Hz6E",
  authDomain: "auth-setup-212ca.firebaseapp.com",
  projectId: "auth-setup-212ca",
  storageBucket: "auth-setup-212ca.firebasestorage.app",
  messagingSenderId: "556879795913",
  appId: "1:556879795913:web:0d7d20dfb9445cf9ca9f18"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)