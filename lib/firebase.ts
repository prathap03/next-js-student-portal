import { getApps, getApp,initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCjRgZBJKaGoimvHATCcQK5G0WAZNz1Qck",
    authDomain: "srec-portal.firebaseapp.com",
    projectId: "srec-portal",
    storageBucket: "srec-portal.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
    appId: process.env.FIREBASE_APP_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth()

export const storage = getStorage(app)

export const fireStore = getFirestore()