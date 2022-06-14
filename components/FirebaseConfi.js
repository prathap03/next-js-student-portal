// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "srec-portal.firebaseapp.com",
    projectId: "srec-portal",
    storageBucket: "srec-portal.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore();
export { firestore };