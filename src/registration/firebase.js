// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7P_YkMoM-W8q3bswyXixfRgiuO3sKOJk",
    authDomain: "postapp-5f0f8.firebaseapp.com",
    databaseURL: "https://postapp-5f0f8-default-rtdb.firebaseio.com",
    projectId: "postapp-5f0f8",
    storageBucket: "postapp-5f0f8.appspot.com",
    messagingSenderId: "73543768572",
    appId: "1:73543768572:web:0ae785fc1302e4f0c1ba79",
    measurementId: "G-VZNSJ32FTR"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
//const db = firebase.firestore()
const auth = getAuth();

export { auth };