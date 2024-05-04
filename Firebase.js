import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDc1CdMgBrU0E8FxJvxqjf4P9hB9Ji4gc4",
    authDomain: "appfotos-d806b.firebaseapp.com",
    projectId: "appfotos-d806b",
    storageBucket: "appfotos-d806b.appspot.com",
    messagingSenderId: "389521359602",
    appId: "1:389521359602:web:a85b7e46578e2495e6466b"
  };
  
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  export const fire = getFirestore(app);