import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC3g2XetCwYK8Y7zOxslK8qCHTJ_ZBSV18",
  authDomain: "final-project-singulars2020.firebaseapp.com",
  databaseURL:
    "https://final-project-singulars2020-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-singulars2020",
  storageBucket: "final-project-singulars2020.appspot.com",
  messagingSenderId: "36604075542",
  appId: "1:36604075542:web:1aefd8860b175d8dca1f37",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { fire, db, storage, auth };
