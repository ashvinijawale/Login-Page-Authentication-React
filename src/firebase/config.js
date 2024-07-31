import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzBDMQX10b3HlxID9FXObFpy9Tsbb6Mwo",
  authDomain: "login-authentication-21484.firebaseapp.com",
  projectId: "login-authentication-21484",
  storageBucket: "login-authentication-21484.appspot.com",
  messagingSenderId: "594635190546",
  appId: "1:594635190546:web:f23aff72d6ef73b6e383cb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);