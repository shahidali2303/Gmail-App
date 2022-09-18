// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgrWU_bf7m1OFTPOnENfD4E25wTwO5GCE",
  authDomain: "zmail-e94ab.firebaseapp.com",
  projectId: "zmail-e94ab",
  storageBucket: "zmail-e94ab.appspot.com",
  messagingSenderId: "362589996797",
  appId: "1:362589996797:web:868819dec9b2a69929e094",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth };
