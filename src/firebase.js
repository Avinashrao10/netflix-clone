import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHx4Spv5OpYXg15RiSgpqFnG7Pl1aMFi0",
  authDomain: "netflix-clone-v2-42087.firebaseapp.com",
  projectId: "netflix-clone-v2-42087",
  storageBucket: "netflix-clone-v2-42087.appspot.com",
  messagingSenderId: "1034112256665",
  appId: "1:1034112256665:web:e1dd1d31fc7e97d66a8608",
  measurementId: "G-643XKW7FSM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export default db;
