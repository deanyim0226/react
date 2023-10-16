import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

import {updateUserToDb} from "../state/user/UserAction"

const Profile = () =>{

    let user = useSelector((state)=> state.userReducer.user)
    let firstNameRef = useRef(null)
    let lastNameRef = useRef(null)
    let addressRef = useRef(null)
    let mobileRef = useRef(null)

    let dispatchToDb = useDispatch()

    let update = (evt) =>{
    
        if(user.email.length >= 1){
           
            let updatedUser = {
                email: user.email, 
                password: user.password,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                address: addressRef.current.value,
                mobile: mobileRef.current.value,
            }

            dispatchToDb(updateUserToDb(updatedUser))
            evt.preventDefault()
    
        }
       
   
    }
  
    return(
        <>
        <h1>USER PROFILE</h1>
        {
            user.email.length >= 1 ?
            <form className={"form"} onSubmit={update}>                
                <label>
                    <b>First Name : </b>
                    <input type="text" className={"input"} ref={firstNameRef}  
                    placeholder="First Name" maxLength={20} />
                </label>
        
                <label>
                    <b>Last Name :</b>
                    <input type="text" className={"input"} ref={lastNameRef}  
                            placeholder="Last Name" maxLength={20} />
                </label>
           
                <label>
                    <b>Address :</b>
                    <input type="text" className={"input"} ref={addressRef}  
                            placeholder="Address" maxLength={50} />
                </label>
          
                <label>
                    <b>mobile :</b>
                    <input type="text" className={"input"} ref={mobileRef}  
                            placeholder="Mobile" maxLength={13} />
                </label>
    
                <input type="submit" className={"button"} value="Update" />
    
        </form>
            
            : ""
        }
        </>
    )

}


export default Profile