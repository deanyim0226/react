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


        <form className="form-profile" onSubmit={update}>                
            <h1>USER PROFILE</h1>
            <form class="row g-3">
                <div class="col-md-6">
                <label className="form-label">
                <b>Frist name </b>
                <input type="text" className= "form-control" ref={firstNameRef}  
                        placeholder="First name" maxLength={20} />
                </label>
                </div>   
                <div class="col-md-6">
                <label className="form-label">
                <b>Last name </b>
                <input type="text" className= "form-control" ref={lastNameRef}  
                        placeholder="Last name" maxLength={20} />
                </label>
                </div>   
            </form>
      
            <div class="col-md-12">
            <label for="inputEmail4" class="form-label"> <b>Address </b></label>
            <input type="text" class="form-control"ref={addressRef}  
                                placeholder="Address" maxLength={50}/>
            </div>

            <div class="col-md-12">
            <label for="inputEmail4" class="form-label"> <b>Mobile </b></label>
            <input type="text" class="form-control"ref={mobileRef}  
                            placeholder="Mobile" maxLength={13}/>
            </div>

            <br>
            </br>
              
            <button className="btn btn-warning" >Update </button>
    
        </form>
            
  
        </>
    )

}


export default Profile