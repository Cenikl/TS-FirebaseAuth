import React, {useEffect, useState} from 'react';
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../Firebase-config";
import {useNavigate} from "react-router-dom";
import {Navigate} from 'react-router-dom';

export default function LogInPage(){
    const turn = useNavigate();
    const [show,setShow] = useState(false);
    const [user,setUser] = useState({})
    useEffect(() => {
        // @ts-ignore
        onAuthStateChanged(auth,(currentUser) => setUser(currentUser))
    },[])

    const logout = async () => {
        setShow(true);
        await signOut(auth);
        turn("/");
    }
    // @ts-ignore
    if(auth.currentUser == null) {
        return <Navigate to="/" replace={true} />
    }
        return (
            <div className="log">
                <h1>
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                    <span>,</span>
                    <span>Y</span>
                    <span>O</span>
                    <span>U</span>
                    <span>A</span>
                    <span>R</span>
                    <span>E</span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>N</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                    <span>E</span>
                    <span>D</span>
                </h1>
                <h4>Current User : </h4>
                <h5>{auth.currentUser?.displayName}</h5>
                <h4>Current email : </h4>
                <h5>{auth.currentUser?.email}</h5>
                {
                    show &&  <div className="loader"></div>
                }
                <button onClick={logout}>Log out</button>
            </div>
        );
}