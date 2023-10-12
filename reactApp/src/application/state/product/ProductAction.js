import * as actionTypes from "../actionTypes"
import axios from "axios"


//Redux is a pattern and library for managing and updating application state, using events called "actions"
/*
An action is a plain JavaScript object that has a type field. 
You can think of an action as an event that describes something that happened in the application.
*/

export const sendDetailsToStore = (newProduct) => {

    return {
        type: actionTypes.SendProductDetailsToStore,
        payload: newProduct
    }
}

export const getDetailsFromStore = (product) =>{
    return {
        type: actionTypes.GetProductDetailsFromStore,
        payload: product
    }
}

export const fetchDataFromDB = () =>{

    return (dispatch) =>{
        window.fetch("http://localhost:9000/shop/api/getproduct",{
            method: 'GET'
        })
        .then(response => response.json())
        .then((response) =>{

            console.log("fetching" + response)
            dispatch(getDetailsFromStore(response))
        })
        .catch((err)=>{
            console.log("Error while saving product ", err)
        })
    }
}

export const saveDataToDB = (newProduct) =>{

    return (dispatch) =>{
        console.log("called by dispatch and synced by thunk")

        axios.post("http://localhost:9000/shop/api/sendDetail", newProduct)
        .then((savedProduct) =>{
            let detail = savedProduct.data

            console.log("SAVE DATA TO DB")
            console.log(detail)
            dispatch(sendDetailsToStore(detail))
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}