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

export const getSingleProductFromStore = (product) =>{
    return {
        type: actionTypes.GetSingleProductDetailsFromStore,
        payload: product
    }
}

export const updateProduct = (updatedProduct)=>{
    return{
        type: actionTypes.UpdateProduct,
        payload: updatedProduct
    }
}

export const getProductFromDb =(productId) =>{
    return (dispatch) => {
        window.fetch("http://localhost:9000/shop/api/getproduct",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId:productId})
        })
        .then(response => response.json())
        .then((response) =>{
            console.log("found the product "+ response)
            dispatch(getSingleProductFromStore(response))
        })
        .catch((err)=>{
            console.log("Error while getting product ", err)
        })    
    }           
} 

export const dispatchUpdatedProduct = (existingProduct,updatedInfo) =>{
    console.log("updated rating is " + updatedInfo)
    return (dispatch) =>{
        window.fetch("http://localhost:9000/shop/api/updateProdcut",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({existingProduct:existingProduct, updatedInfo:updatedInfo})
        })
        .then(response => response.json())
        .then((response) =>{

            console.log("successfully updated product " + response.name)
            //is it necessary to update redux? maybe 
            dispatch(updateProduct(response))
        })
    }
}

export const fetchDataFromDB = () =>{

    return (dispatch) =>{
        window.fetch("http://localhost:9000/shop/api/getproducts",{
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