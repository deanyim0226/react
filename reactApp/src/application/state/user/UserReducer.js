
import * as ActionType from "../actionTypes"
/*
Reducer read the payloads from the actions and then updates the store via the state accordingly.
It is a pure function to return a new state from the initial state.
*/
const InitialUserState = {
    user : {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        mobile: "",
    }
}

let userReducer = (state = InitialUserState, action) =>{

    switch(action.type){
        case ActionType.GetUserInfoFromStore:
            return {...state, user: action.payload}

        case ActionType.SendUserInfoToStore:
            return {...state, user: action.payload}
            
        default:
            return state
    }
}

export default userReducer