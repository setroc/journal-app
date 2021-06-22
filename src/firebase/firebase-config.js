import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyE6vrgF0EwWNNcYxVisS1M1guGBPpKK4",
    authDomain: "react-app-curso-4a0d7.firebaseapp.com",
    projectId: "react-app-curso-4a0d7",
    storageBucket: "react-app-curso-4a0d7.appspot.com",
    messagingSenderId: "956431137609",
    appId: "1:956431137609:web:73d96e3bb9b2cf863a7898"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}