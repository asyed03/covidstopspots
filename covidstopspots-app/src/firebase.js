import firebase from 'firebase'
import "firebase/auth"
import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA-S_37BYtqpH-IKz0glxwUB8-MAhK2jo",
    authDomain: "covidstopspots.firebaseapp.com",
    databaseURL: "https://covidstopspots-default-rtdb.firebaseio.com",
    projectId: "covidstopspots",
    storageBucket: "covidstopspots.appspot.com",
    messagingSenderId: "452942963425",
    appId: "1:452942963425:web:d83e8ab33e86346c5ecda0",
    measurementId: "G-VP83E9BKQ5"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export default fire;