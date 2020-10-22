import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDbrTzY2kxxm1wnmX_hSTUTvGraNi1xMK8",
    authDomain: "pasteleria-20986.firebaseapp.com",
    databaseURL: "https://pasteleria-20986.firebaseio.com",
    projectId: "pasteleria-20986",
    storageBucket: "pasteleria-20986.appspot.com",
    messagingSenderId: "879518828243",
    appId: "1:879518828243:web:51a3711faa14c24baa7626",
    measurementId: "G-440LHRLF0Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}