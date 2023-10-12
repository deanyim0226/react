//defines the initial state for user and also returns user reducer with logic to create new user state
/*
A reducer is a function that receives the current state and an action object, 
decides how to update the state if necessary, and returns the new state: (state, action) => newState.
You can think of a reducer as an event listener which handles events based on the received action (event) type.
*/
import * as ActionType from "../actionTypes"

const Initial_Product_State = {
    products:[],
    default : {
        name: "",
        price: "",
        description: "",
        rating: ""
    }
}

//write callback / reducer to generate new state upon action change
let productReducer = (state = Initial_Product_State, action) =>{
    
    switch (action.type){
        case ActionType.SendProductDetailsToStore:
            //... state : {Product, ...}
            return {...state, products : action.payload}
        
        case ActionType.GetProductDetailsFromStore:
            return {...state, products : action.payload}

        default:
            return state
    }
}

export default productReducer