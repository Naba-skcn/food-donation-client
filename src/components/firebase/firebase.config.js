// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCupUDM4Pm02b3GJdTkpciWFtZ66Ix65qQ",
  authDomain: "food-a11.firebaseapp.com",
  projectId: "food-a11",
  storageBucket: "food-a11.appspot.com",
  messagingSenderId: "409797212809",
  appId: "1:409797212809:web:a2af3162cbdef9039fe458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
