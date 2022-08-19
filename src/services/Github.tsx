import {GithubAuthProvider,signInWithRedirect} from "firebase/auth";
import {auth} from '../Firebase-config';
import {useState} from "react";


export default function GithubSignIn (){
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth,provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) =>{
            console.log(err)
        })
}