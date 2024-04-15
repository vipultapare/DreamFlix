// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSYnbmz1PN3_MNvb_j6Bp8RWfE6FoWaQ",
  authDomain: "dreamflix-2001.firebaseapp.com",
  projectId: "dreamflix-2001",
  storageBucket: "dreamflix-2001.appspot.com",
  messagingSenderId: "300620299647",
  appId: "1:300620299647:web:6627fd315d5db447c82e4a",
  measurementId: "G-XWE04JHQ95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();