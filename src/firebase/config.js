import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKDcPaP2zwrI0hBmKsAzxQmbNdNvz47Es",
  authDomain: "hearken-d1f37.firebaseapp.com",
  projectId: "hearken-d1f37",
  storageBucket: "hearken-d1f37.firebasestorage.app",
  messagingSenderId: "115813360428",
  appId: "1:115813360428:web:b180d6e1e21f3dca474289"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);