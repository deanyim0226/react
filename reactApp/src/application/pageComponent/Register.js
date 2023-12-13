import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {saveUserToDb} from "../state/user/UserAction"

import '../app.css'

const Register = (props) =>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    let dispatchToDB = useDispatch()
    let navigate = useNavigate()

    let register = (evt) =>{
        console.log("processing register") 
        
        let fullName = name.split(" ")
        let firstName = fullName[0]
        let lastName = name.slice(firstName.length+1,name.length)

        //check email is valid or not 
        if(password !== repassword){
            alert("passwords don't match")
        }
        else{

            const userInfo = {
                firstName,
                lastName,
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
 <img  class="image-form" src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80"></img>
        <form className={"form-register"} onSubmit={register}>       
        <h1 className="title" >Create account</h1>        
            <label>
                <b>Your name</b>
                <input type="text" className= "form-control" value={name}  onChange={ (evt) => {setName(evt.target.value)}}
                placeholder="Frist and last name" maxLength={20} required/>
            </label> 
            <br/>
            <label>
                <b>Email</b>
                <input type="text" className="form-control" value={email}  onChange={ (evt) => {setEmail(evt.target.value)}}
                placeholder="Email" maxLength={20} required/>
            </label>
            <br/>
            <label>
                <b>Password</b>
                <input type="password" className="form-control" value={password}  onChange={ (evt) => {setPassword(evt.target.value)}}
                        placeholder="Password is required" maxLength={20} required/>
            </label>
 
            <br/>
            <label>
                <b>Re-enter password</b>
                <input type="password" className="form-control" value={repassword}  onChange={ (evt) => {setRepassword(evt.target.value)}}
                        placeholder="Re-passwrod is required" maxLength={20} required/>
            </label>
            <br/>
            <button className="btn btn-warning" >Coninue </button>
            <br/>
            <label>Already have an account? <a>Sign in</a></label>

        </form>
        </>
    )

}


export default Register

// <img  class="image-form" src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80"></img>