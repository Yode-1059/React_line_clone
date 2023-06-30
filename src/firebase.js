import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDg04NPqZY3DVmFgYpS9HKIJfinNzbHHVw",
    authDomain: "line-1464b.firebaseapp.com",
    projectId: "line-1464b",
    storageBucket: "line-1464b.appspot.com",
    messagingSenderId: "51853877026",
    appId: "1:51853877026:web:a3606db197f055ff2d8f7b"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };