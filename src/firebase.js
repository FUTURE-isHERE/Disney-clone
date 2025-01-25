// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0fT9RBLKsQ0byyrJ0avk7e4zODhLqrD4",
  authDomain: "disneyplus-clone-86f8a.firebaseapp.com",
  projectId: "disneyplus-clone-86f8a",
  storageBucket: "disneyplus-clone-86f8a.appspot.com",
  messagingSenderId: "361661265233",
  appId: "1:361661265233:web:d2b7d1bc4dc7205ef10f70",
  measurementId: "G-ZBFW57ZP13",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = app.storage();

export { auth, provider, storage };
export default db;
