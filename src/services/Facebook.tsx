import {FacebookAuthProvider,signInWithRedirect,getRedirectResult} from "firebase/auth";
import {auth} from '../Firebase-config';
import {useState} from "react";

const provider = new FacebookAuthProvider();

export default function FacebookSignIn (){
    signInWithRedirect(auth,provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) =>{
            console.log(err)
        })

    getRedirectResult(auth)
        .then((result) => {
            // @ts-ignore
            const credential = FacebookAuthProvider.credentialFromResult(result);
            // @ts-ignore
            const token = credential.accessToken;
            // @ts-ignore
            const user = result.user;
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
    });
}