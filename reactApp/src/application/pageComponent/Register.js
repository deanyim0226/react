import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {saveUserToDb} from "../state/user/UserAction"

import '../app.css'

const Register = (props) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    let dispatchToDB = useDispatch()
    let navigate = useNavigate()

    let register = (evt) =>{
        console.log("processing register") 

        //check email is valid or not 
        if(password !== repassword){
            alert("passwords don't match")
        }
        else{

            const userInfo = {
                email,
                password 
            }

            dispatchToDB(saveUserToDb(userInfo))
            //navigate('/')
            evt.preventDefault()
        }

    }


    return(
        <>
        <h1>SIGN UP</h1>
        <form className={"form"} onSubmit={register}>                
            <label>
                <b>Email : </b>
                <input type="text" className={"input"} value={email}  onChange={ (evt) => {setEmail(evt.target.value)}}
                placeholder="Email" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Password :</b>
                    <input type="password" className={"input"} value={password}  onChange={ (evt) => {setPassword(evt.target.value)}}
                            placeholder="Password is required" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Re-enter password :</b>
                    <input type="password" className={"input"} value={repassword}  onChange={ (evt) => {setRepassword(evt.target.value)}}
                            placeholder="Re-passwrod is required" maxLength={20} required/>
                </label>
                <br/>

                <input type="submit" className={"button"} value="Signup" />
    
        </form>
        </>
    )

}


export default Register