import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMyYP2qnG-804Ah1Yz1zRFBLumWemAt-E",
  authDomain: "mern-chat-cad71.firebaseapp.com",
  projectId: "mern-chat-cad71",
  storageBucket: "mern-chat-cad71.appspot.com",
  messagingSenderId: "1012601619622",
  appId: "1:1012601619622:web:748bf4533cef5ec7d7a067",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
