import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoDJtVpq3AKrn9TZu2PU-1hixbfobD9VA",
  authDomain: "clone-7919a.firebaseapp.com",
  projectId: "clone-7919a",
  storageBucket: "clone-7919a.appspot.com",
  messagingSenderId: "898278771746",
  appId: "1:898278771746:web:d26c25a22f12d552df8e7b",
  measurementId: "G-RRF3V5CW33",
};
// const db = firebaseApp.firestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
