import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa9QmxtWW2iI5LyeUWu9ZRj_H9L8EVLM0",
    authDomain: "firechat-4a5ab.firebaseapp.com",
    databaseURL: "https://firechat-4a5ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "firechat-4a5ab",
    storageBucket: "firechat-4a5ab.appspot.com",
    messagingSenderId: "257781361668",
    appId: "1:257781361668:web:b5d078d556c451d6225951"
};


// Initialize Firebase
const DB = firebase.initializeApp(firebaseConfig);

export default DB;