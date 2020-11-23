import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCQdCn4hokBhkS74wNdOIwIRHgl_KqnXXc",
    authDomain: "pasteleria-1b1be.firebaseapp.com",
    databaseURL: "https://pasteleria-1b1be.firebaseio.com",
    projectId: "pasteleria-1b1be",
    storageBucket: "pasteleria-1b1be.appspot.com",
    messagingSenderId: "703881074805",
    appId: "1:703881074805:web:50fb0955bb746fcb16803c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}