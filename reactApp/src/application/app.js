import React, {Component, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import Home from "./commonComponent/Home";
import Profile from "./pageComponent/Profile";
import Login from "./pageComponent/Login";
import Register from "./pageComponent/Register";
import DisplayProduct from "../application/pageComponent/Product/DisplayProduct"
import Product from "./pageComponent/Product";

import Cart from "./pageComponent/Cart"
import Checkout from "./pageComponent/Checkout";
import Payment from "./pageComponent/Payment";
import Order from "./pageComponent/Order";

export default class Application extends Component{
    
    constructor(props){
        super(props)

    }

    //redux is a predictable state container

    render(){

        return(
            <Router>
                <Suspense fallback= {<div>LOADING..................</div>}/>
                <Header/>
                    <Routes>
                        <Route path ="/" element = {<Home/>}/>
                        <Route path ="/profile" element = {<Profile/>}/>
                        <Route path = "/login" element = {<Login/>}/>
                        <Route path = "/register" element = {<Register/>}/>
                        <Route path = "/shop" element = {<DisplayProduct/>}/>
                        <Route path = "/cart" element = {<Cart/>}/>
                        <Route path = "/product" element = {<Product/>}/>
                        <Route path = "/checkout" element = {<Checkout/>}/>
                        <Route path = "/payment" element = {<Payment/>}/>
                        <Route path = "/order" element = {<Order/>}/>
                     
                    </Routes>
                <Footer/>
            </Router>
        
        )
    }

}

//Assessment #4
//1. Create a class component and show all the life cycle hooks
//2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
// 	 Create a form to allow user to submit Product Details - name, price, desc, rating
// 	 Create an action method to add the detail to database using a server api
// 	 Server Side - Create product router and api to save the product using productdatamodel
//4. Create a route and navigation to show product component
//5. Explain various hooks in functional component (at least 5)
/*
    useState is a hook similar to this.setState
    useEffect serves the same purpose as componentDidmount/ componentDidUpdate / componentWillUnmount combined
    it runs both after the first render and after every update.
    useContext lets you subcribe to React context without introducing nesting
    userReducer

*/


/*

// 11-10-2023 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered


// 10-10-2023 - Practice

// Coupon Page 
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload

// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users 
// can insert the products to database 

// 09-10-2023 - Practice

// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)

// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page
*/