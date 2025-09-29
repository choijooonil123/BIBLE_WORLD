import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD3SB9G2J6mwabV0RnrvKnn_XSJlD1FL64",
  authDomain: "bible-world-67903.firebaseapp.com",
  projectId: "bible-world-67903",
  storageBucket: "bible-world-67903.firebasestorage.app",
  messagingSenderId: "45023541269",
  appId: "1:45023541269:web:76f1e1489d384a214c761c",
  measurementId: "G-2MZJ5BKWCT"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
