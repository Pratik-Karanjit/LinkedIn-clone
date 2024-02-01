import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAav8wdqplqq38qFTRoQoz7TOVHzmUSfRU",
  authDomain: "pratik-s-linkedin-clone.firebaseapp.com",
  projectId: "pratik-s-linkedin-clone",
  storageBucket: "pratik-s-linkedin-clone.appspot.com",
  messagingSenderId: "29836946059",
  appId: "1:29836946059:web:a3c1558576704a7a33028e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export { firebase };
