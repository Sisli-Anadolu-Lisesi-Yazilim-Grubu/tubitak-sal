import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuMv4Z0ojYLGCRf6CEuYcO7NrljdXzaQc",
    authDomain: "tubitak-sal.firebaseapp.com",
    databaseURL: "https://tubitak-sal-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tubitak-sal",
    storageBucket: "tubitak-sal.appspot.com",
    messagingSenderId: "1090253595543",
    appId: "1:1090253595543:web:823d44b98a1be3a66f1ad2",
    measurementId: "G-KP1S76S7EN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;