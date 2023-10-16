import * as actionTypes from "../actionTypes"

const Initial_Cart_State = []


let cartReducer = (state = Initial_Cart_State, action) =>{

    console.log("cart Reducer state " + state)
    console.log("cart Reducer action " + action.payload)
    switch(action.type){

        case actionTypes.AddItemToCart:
            let newState = state.filter(item => item._id != action.payload._id)
            return [...newState, action.payload]
        
        case actionTypes.DeleteItemFromCart:        
            return state.filter(item => item._id != action.payload)

        case actionTypes.UpdateItemFromCart:

            return state.map((item) => {
                if(item._id == action.payload.id){
                    return {...item, qty: action.payload.qty}
                }
                return item
            })

        case actionTypes.EmptyCart:
            return []

        default:
            return state
    }
}

export default cartReducer