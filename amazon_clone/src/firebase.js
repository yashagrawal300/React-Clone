import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAMHonUirQuEtWps6OS6gNG2oFbf5f1s6c",
    authDomain: "clone-b8fd4.firebaseapp.com",
    databaseURL: "https://clone-b8fd4.firebaseio.com",
    projectId: "clone-b8fd4",
    storageBucket: "clone-b8fd4.appspot.com",
    messagingSenderId: "79522948667",
    appId: "1:79522948667:web:33403d1338acedbdd51e1e",
    measurementId: "G-TG6EF0T866"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();



export {db, auth};

