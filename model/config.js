const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, getDocs, query, getDoc } = require("firebase/firestore");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxizPBGi0CztWfLA0zjkDPUtWEW04g1vc",
  authDomain: "tarefafirebase-eeb37.firebaseapp.com",
  projectId: "tarefafirebase-eeb37",
  storageBucket: "tarefafirebase-eeb37.appspot.com",
  messagingSenderId: "607772188597",
  appId: "1:607772188597:web:ca97645aec3c35e51843fc",
  measurementId: "G-57X9RFZG93"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
module.exports = db;