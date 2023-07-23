// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVn1iQXrhaD7Yb9HUnVw5MXbR8ADzo35o",
  authDomain: "college-booker-rahi.firebaseapp.com",
  projectId: "college-booker-rahi",
  storageBucket: "college-booker-rahi.appspot.com",
  messagingSenderId: "212966963716",
  appId: "1:212966963716:web:2d50f61c65d47733d15351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;