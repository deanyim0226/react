import axios from "axios"
import * as actionType from "../actionTypes"
import {getUserCart} from "../cart/CartAction"
import { useNavigate } from "react-router-dom"

//perform userAction 
export const signInUser = (newUser) =>{
    return {
        type: actionType.GetUserInfoFromStore,
        payload: newUser
    }
}

export const signUpUser = (newUser) =>{
 
    return {
        type: actionType.SendUserInfoToStore,
        payload: newUser
    }
}

export const updateUser = (existedUser) =>{
    return{
        type: actionType.UpdateUserInfo,
        payload: existedUser
    }
}

export const updateUserToDb = (updatedUser) =>{

    return function(dispatch) {
        window.fetch("http://localhost:9000/user/api/update", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
        .then(response => response.json())
        .then((response) =>{
            console.log("we updated to the db " + response)
       
            dispatch(updateUser(response))
            if(!updatedUser.reviewableProduct){
                alert("Successfully updated")
            }else{
                alert("Now you can review those products that you ordered")
            }
  
        }).catch((err)=>{
            console.log("Error while fetching user" , err)
        })
    }
}

export const saveUserToDb = (newUser) =>{

    return function(dispatch){

        axios.post("http://localhost:9000/user/api/signup", newUser)
        .then((savedUser)=>{
            //dispatch(signUpUser(savedUser))
            console.log("successfully send user info to the server " + savedUser.status)
        })
        .catch((err)=>{
            console.log("ERROR WHILE SENDING USER TO DB " + err)
        })
    }
}

export const getUserFromDb = (user) =>{
 
    return function (dispatch) {

        window.fetch("http://localhost:9000/user/api/signin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(response => response.json())
        .catch((err)=>{
            alert("Can't find user")
            dispatch(err)
        })
        .then((response) =>{
            dispatch(signInUser(response))
            dispatch(getUserCart(response._id))
            alert("Successfully Logged In")
            
        })
        .catch((err)=>{
            console.log("Error while fetching user" , err)
        })

    }
}