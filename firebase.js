import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";

 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7nXO2cW3f8Wmm0vyB4Rpehl8-hh4E9yM",
    authDomain: "ebh-report.firebaseapp.com",
    projectId: "ebh-report",
    storageBucket: "ebh-report.firebasestorage.app",
    messagingSenderId: "458081825735",
    appId: "1:458081825735:web:b56f8545f707d72d66dfe2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, signInWithPopup };
