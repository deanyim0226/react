import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/ProductReducer";
import userReducer from "./user/UserReducer"
import cartReducer from "./cart/CartReducer";
import orderReducer from "./order/OrderReducer"
import couponReducer from "./coupon/CouponReducer"
import cancelReducer from "./cancelledOrder/CancelReducer";
import reviewReducer from "./review/ReviewReducer";
import thunk from "redux-thunk";

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    cartReducer,
    orderReducer,
    couponReducer,
    cancelReducer,
    reviewReducer
  
})

/*
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings
*/

//create configure and export the store from this code
export default configureStore(
{reducer: rootReducer},
{},//initial state if we want to set from store instead of reducer
applyMiddleware(thunk))

