// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaxNu1XxcXrbAF_xuy-faNFxyNyaA-nmY",
  authDomain: "netflixgpt-b65eb.firebaseapp.com",
  projectId: "netflixgpt-b65eb",
  storageBucket: "netflixgpt-b65eb.firebasestorage.app",
  messagingSenderId: "735059651526",
  appId: "1:735059651526:web:2b34bda51e68bbce0620c7",
  measurementId: "G-K93D4NZ1Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);