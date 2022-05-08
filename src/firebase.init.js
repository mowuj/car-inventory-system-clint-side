// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCtDFN2NnsbjkIqzPM-G7yCDCAm1FgsN3U",
  authDomain: "car-inventoy.firebaseapp.com",
  projectId: "car-inventoy",
  storageBucket: "car-inventoy.appspot.com",
  messagingSenderId: "652313397223",
  appId: "1:652313397223:web:814b9298447c2f04555f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;