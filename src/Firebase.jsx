import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfVuPtDRLyOPYSrCGwcmmyiy8yw41d1N4",
  authDomain: "clone-55611.firebaseapp.com",
  projectId: "clone-55611",
  storageBucket: "clone-55611.appspot.com",
  messagingSenderId: "688075125816",
  appId: "1:688075125816:web:6c4afb10550e3b319c62cd",
  measurementId: "G-MFWR9XXEX8",
};
// const db = firebaseApp.firestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
