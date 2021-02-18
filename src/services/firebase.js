import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC3g2XetCwYK8Y7zOxslK8qCHTJ_ZBSV18",
  authDomain: "final-project-singulars2020.firebaseapp.com",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
