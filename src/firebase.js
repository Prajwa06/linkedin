import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAaU7axnhKTCtJfa_Oyi2vuMqwQxBKLrKc",
    authDomain: "linked-clone-5a173.firebaseapp.com",
    databaseURL: "https://linked-clone-5a173-default-rtdb.firebaseio.com",
    projectId: "linked-clone-5a173",
    storageBucket: "linked-clone-5a173.appspot.com",
    messagingSenderId: "186878584630",
    appId: "1:186878584630:web:c92b0f5dd89a7609d3f597"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db= getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {db,auth};