import {GoogleAuthProvider,signInWithRedirect} from "firebase/auth";
import {auth} from '../Firebase-config';
import {useState} from "react";


export default function GoogleSignIn (){
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) =>{
            console.log(err)
        })
}