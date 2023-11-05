import * as actionTypes from "../actionTypes"

let initailnumber = []

let couponReducer = (state = initailnumber , action) =>{

    console.log("coupon state is " + state + "action is " + action.payload)
    switch(action.type){

        case actionTypes.GenerateCoupon:

            return [...state, action.payload]
        default:
            return state

    }

}

export default couponReducer