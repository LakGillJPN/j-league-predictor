// Import the functions you need from the SDKs you need

<<<<<<< HEAD
//require('dotenv').config();

=======
>>>>>>> 6d88305da6939b852232b597c7f4c3d59a008395
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: "j-league-predictor",
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);