import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyDrX392k3ge3ijlPUQKCmsXzi3Ofyndk",
  authDomain: "linkedin-clone-92e15.firebaseapp.com",
  projectId: "linkedin-clone-92e15",
  storageBucket: "linkedin-clone-92e15.appspot.com",
  messagingSenderId: "466567019603",
  appId: "1:466567019603:web:16cd7f820583e297fa5aa6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
