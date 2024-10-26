// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGDM4YzUaRZIkjBM3JZxM29QNJZHdhKsk",
  authDomain: "bootcamp-skillup.firebaseapp.com",
  projectId: "bootcamp-skillup",
  storageBucket: "bootcamp-skillup.appspot.com",
  messagingSenderId: "952625662578",
  appId: "1:952625662578:web:f0995bc59642d06b9ad0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;