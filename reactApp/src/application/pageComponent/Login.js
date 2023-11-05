import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {getUserFromDb} from "../state/user/UserAction"
import '../app.css'

const Login = () =>{

    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    
    let dispatchToDB = useDispatch()
  
    let navigate = useNavigate()

    const login = (evt) =>{ 

        const userInfo = {
            email,
            password 
        }
    
        dispatchToDB(getUserFromDb(userInfo))
        setTimeout(()=>{
            navigate('/')
        },1500)
        evt.preventDefault()

    }

    return (
        <>
        <form className= {"form-login"} onSubmit={login}>
            <h1>Sign in</h1>
            <label >
                <b>Email</b>
                <input type="text" className="form-control" value={email}  onChange={ (evt) => {setEmail(evt.target.value)}}
                placeholder="Email" maxLength={50} required/>
            </label>
            <br/>
            <label>
                <b>Password</b>
                <input type="password" className="form-control" value={password}  onChange={ (evt) => {setPassword(evt.target.value)}}
                placeholder="Password is required" maxLength={50} required/>
            </label>
            <br/>
            <button className="btn btn-warning" >Coninue </button>
            <br/>
        </form>
        </>
    )
}


export default Login



/*

                <b>Email</b>
                <input type = "text" placeholder="Enter the email" value={email} onChange={ (evt) => setEmail(evt.target.value) } required></input>
                <br></br>
                <b>Password</b>
                <input type = "password" placeholder="Eeter the password" value={password} onChange={ (evt) => setPassword(evt.target.value)} required> onc</input>
                <br></br>
*/