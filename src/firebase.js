import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyC_2nNn0MniV38sMAezT7DX5NmVfeJjyHs",
    authDomain: "zotciety.firebaseapp.com",
    projectId: "zotciety",
    storageBucket: "zotciety.appspot.com",
    messagingSenderId: "825597162128",
    appId: "1:825597162128:web:ddfaebc62fdab6541cde15"
  });

const db = getFirestore();

export default db;