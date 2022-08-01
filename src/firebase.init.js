// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjerFNwKPKLJbmsdHjldAyKwZPoiIpmFA",
  authDomain: "random-users-9f90f.firebaseapp.com",
  projectId: "random-users-9f90f",
  storageBucket: "random-users-9f90f.appspot.com",
  messagingSenderId: "564821564057",
  appId: "1:564821564057:web:3f3b168fe2a4f3882af608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
