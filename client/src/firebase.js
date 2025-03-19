// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtsctC0oxW19RF29ohragDCHeHLyUQ7Sk",
  authDomain: "mern-blog-c2369.firebaseapp.com",
  projectId: "mern-blog-c2369",
  storageBucket: "mern-blog-c2369.firebasestorage.app",
  messagingSenderId: "775190243729",
  appId: "1:775190243729:web:18d1a2d25ca1716b781230",
  measurementId: "G-737FHEEXPJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
