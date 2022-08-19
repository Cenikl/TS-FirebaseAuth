import React, {useEffect, useState} from 'react';
import {onAuthStateChanged,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase-config';
import {Navigate, useNavigate} from 'react-router-dom';
import GoogleSignIn from '../services/Google';
import FacebookSignIn from "../services/Facebook";
import GithubSignIn from "../services/Github";
import Hicon from '../images/HEI.png';
import Gicon from '../images/google.png';
import Ficon from '../images/facebook.png';
import Giticon from '../images/github.png';
import GBicon from '../images/google_white.png';
import FBBicon from '../images/facebook_white.png';
import GTicon from '../images/github_white.png';
import '../App.css';


export default function MiddleCard(){
    const history = useNavigate();

    const [show,setShow] = useState(false);
    const [user,setUser] = useState({});
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const login = async () => {
        setShow(true);
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword);
            if(user.user.email != null || user.user.email != "") {
                history('/profile');
            }
        } catch (error){
            // @ts-ignore
            console.log(error.message);
        }
    }

    useEffect(() => {
        // @ts-ignore
        onAuthStateChanged(auth,(currentUser) => setUser(currentUser))
    },[])

    // @ts-ignore
    if(user?.email != null || auth.currentUser !=null || user?.displayName != null) {
        return <Navigate to="/profile" replace={true} />
    }
    return (
        <div className="middlecard">
            <h1 className="title"><img src={Hicon} alt=""/></h1>
            <hr/>
            <br/>
            <label htmlFor="">Email :</label> <br/>
            <input
                type="email"
                name="email"
                id="mail"
                required={true}
                placeholder="Put your email here..."
                onChange={(event) => {
                setLoginEmail(event.target.value);}}
            />
            <br/> <br/>
            <label htmlFor="" id="test">Password :</label> <br/>
            <input
                type="password"
                name="password"
                id="pass"
                required={true}
                placeholder="Put your password here..."
                onChange={(event) => {
                    setLoginPassword(event.target.value);}}
            />
            <br/> <br/>
            {
                show &&  <div className="loader"></div>
            }
            <button id="bton" onClick={login}>Sign in</button>
            <br/>
            <h2 className="other">
                <span>Or</span>
            </h2>
            <div className="Olink">
                <div className="first">
                    <button id="imgbton" onClick={() => {GoogleSignIn();setShow(true)}}  type="button">
                        <img src={Gicon} alt="Submit" id="Fimg" className="Gimg"/>
                        <img src={GBicon} alt="Submit" className="GBimg"/>
                    </button>
                </div>
                <div className="second">
                    <button id="imgbton" onClick={() => {FacebookSignIn();setShow(true)}} type="button">
                        <img src={Ficon} alt="Submit" className="Fimg"/>
                        <img src={FBBicon} alt="Submit" className="Fbimg"/>
                    </button>
                </div>
                <div className="third">
                    <button id="imgbton" onClick={() => {GithubSignIn();setShow(true)}} type="button">
                        <img src={Giticon} alt="Submit" className="GTimg"/>
                        <img src={GTicon} alt="Submit" className="GTBimg"/>
                    </button>
                </div>
            </div>
            <div className="last">
                <p>@Copyright 2021-2022</p>
                <p>Made by an HEI Student</p>
            </div>
        </div>
    )
}