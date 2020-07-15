import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCYl66X_dz1Mv4tfwjqA-pJGi1Fq2klwa8",
  authDomain: "sns-app-b2bc1.firebaseapp.com",
  databaseURL: "https://sns-app-b2bc1.firebaseio.com",
  projectId: "sns-app-b2bc1",
  storageBucket: "sns-app-b2bc1.appspot.com",
  messagingSenderId: "639166804156",
  appId: "1:639166804156:web:347a76e3f695b41e1ee0b9",
  measurementId: "G-EFR6RH200E"
};

firebase.initializeApp(firebaseConfig);

export default firebase;