// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDimmp85RfHT9BCIORtTJdBlY9pDVbM4xg",
  authDomain: "project-taxitel.firebaseapp.com",
  projectId: "project-taxitel",
  storageBucket: "project-taxitel.appspot.com",
  messagingSenderId: "984268160771",
  appId: "1:984268160771:web:4b26e242c8cd76aa14f336"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
// export const FirebaseDB   = getFirestore( FirebaseApp );