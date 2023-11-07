import * as actionTypes from "../actionTypes"

const Inital_Cancelled_Order = []

let cancelReducer = (state = Inital_Cancelled_Order, action) =>{

    console.log("cancelreducer is called " + action.payload)
    console.log("cancelreducer is called " + state)
    switch(action.type){

        case actionTypes.AddOrderToCancelledOrder:
            return [...state, action.payload]
        case actionTypes.DeleteCancelledOrder:

            return state.filter(item => item._id != action.payload)
        
        case actionTypes.EmptyCancelledOrder:
            return []
        default:
            return state
    }

}

export default cancelReducer