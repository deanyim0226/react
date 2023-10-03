import * as actionTypes from "../actionTypes"
import axios from "axios"


//Redux is a pattern and library for managing and updating application state, using events called "actions"
/*
An action is a plain JavaScript object that has a type field. 
You can think of an action as an event that describes something that happened in the application.
*/

export const SendDetailsToStore = (newProduct) => {

    return {
        type: actionTypes.SendDetailsToStore,
        payload: newProduct
    }
}

export const saveDataToDB = (newProduct) =>{

    return (dispatch) =>{
        console.log("called by dispatch and synced by thunk")

        axios.post("http://localhost:9000/product/api/sendDetail", newProduct)
        .then((savedProduct) =>{
            let detail = savedProduct.data

            console.log("SAVE DATA TO DB")
            console.log(detail)
            dispatch(SendDetailsToStore(detail))
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}