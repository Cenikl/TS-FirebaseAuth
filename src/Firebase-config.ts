import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUbnx9Xc9hG2WrapBJFeTTtQ9WpI3qQ2I",
    authDomain: "ts-firebaseauth.firebaseapp.com",
    projectId: "ts-firebaseauth",
    storageBucket: "ts-firebaseauth.appspot.com",
    messagingSenderId: "1050244626281",
    appId: "1:1050244626281:web:fdc257d74432e705e1aff8",
    measurementId: "G-WFM77KCZBQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

