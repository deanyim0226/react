import * as actionTypes from "../actionTypes"

const Initial_Order_State = []

let orderReducer = (state = Initial_Order_State, action) =>{

    console.log("order Reducer state " + state)
    console.log("order Reducer action " + action.payload)
  
    switch(action.type){

        case actionTypes.AddCartToRecentOrder:

            return [...state, action.payload]
        case actionTypes.DeleteRecentOrder:
            return state.filter(item=>item._id != action.payload)
        case actionTypes.EmptyOrder:
            return []
        default:
            return state    
        
    }
}

export default orderReducer