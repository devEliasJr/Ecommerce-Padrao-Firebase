import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIxLUI-eInG1NurUybm_A7kcQV8eD3BpQ",
  authDomain: "ecommerce-b50db.firebaseapp.com",
  projectId: "ecommerce-b50db",
  storageBucket: "ecommerce-b50db.appspot.com",
  messagingSenderId: "514129439571",
  appId: "1:514129439571:web:b9ea8a89f8f393e94c8fa6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
