import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB71HT8c38dZKGMDOYCAUcd5TZhWiAv5RM",
  authDomain: "bander-marioplan.firebaseapp.com",
  databaseURL: "https://bander-marioplan.firebaseio.com",
  projectId: "bander-marioplan",
  storageBucket: "bander-marioplan.appspot.com",
  messagingSenderId: "1035989570520",
  appId: "1:1035989570520:web:42519fda0fc10f16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;