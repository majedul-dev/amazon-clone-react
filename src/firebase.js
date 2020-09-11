import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCFqKhNX4zt73ahIzLYR2jlOgsNudMZkEA",
  authDomain: "clone-ffbb8.firebaseapp.com",
  databaseURL: "https://clone-ffbb8.firebaseio.com",
  projectId: "clone-ffbb8",
  storageBucket: "clone-ffbb8.appspot.com",
  messagingSenderId: "1084675165353",
  appId: "1:1084675165353:web:6b242f19ff9ce39cef6db8",
  measurementId: "G-8CGM24T3XS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
