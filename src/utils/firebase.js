// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcvHjTCfQDNB3ypeNoCph_d1TzrvnbR0U",
  authDomain: "netflixgpt-b44a7.firebaseapp.com",
  projectId: "netflixgpt-b44a7",
  storageBucket: "netflixgpt-b44a7.appspot.com",
  messagingSenderId: "459952285224",
  appId: "1:459952285224:web:3caad15ebf85d34b0db71d",
  measurementId: "G-E0WLCW44KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
