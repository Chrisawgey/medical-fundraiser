// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9v-u-4CcGqXMo7aZfrTmiLj8fuPBjIlM",
  authDomain: "dylanmedical-feaff.firebaseapp.com",
  projectId: "dylanmedical-feaff",
  storageBucket: "dylanmedical-feaff.firebasestorage.app",
  messagingSenderId: "735536597763",
  appId: "1:735536597763:web:2e2ee0ce0e5703dfe2b736",
  measurementId: "G-BC8BJS91RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);