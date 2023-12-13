import * as actionTypes from "../actionTypes"

const Inital_Review = []


let reviewReducer = (state = Inital_Review, action) =>{

    switch(action.type){

        case actionTypes.SaveReview:
            return [...state, action.payload]
        case actionTypes.EmptyReviews:
            return []
        default:
            return state
    }
}

export default reviewReducer