import React, {Component, Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import CancelledOrder from "./pageComponent/CancelledOrder";

let Header = lazy(()=> import("./commonComponent/Header"));
let Footer = lazy(()=> import( "./commonComponent/Footer"));
let Home = lazy(()=>  import("./commonComponent/Home"));
let Profile = lazy(()=>  import("./pageComponent/Profile"));
let Login = lazy(()=>  import("./pageComponent/Login"));
let Register = lazy(()=>  import("./pageComponent/Register"));
let DisplayProduct = lazy(()=> import ("../application/pageComponent/Product/DisplayProduct"))
let Product = lazy(()=> import( "./pageComponent/Product"));

let Cart = lazy(()=> import( "./pageComponent/Cart"))
let Checkout = lazy(()=>  import("./pageComponent/Checkout"));
let Payment = lazy(()=> import( "./pageComponent/Payment"));
let Order = lazy(()=>  import("./pageComponent/Order"));
let Logout = lazy(()=> import( "./pageComponent/Logout"));

let Coupon = lazy(()=> import ("./pageComponent/Coupon"));

import Review from "./pageComponent/Review"
import ReivewFormComponent from "./pageComponent/Review/ReviewFormComponent";

/*
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
import Logout from "./pageComponent/Logout";
*/
export default class Application extends Component{
    
    constructor(props){
        super(props)

    }

    //redux is a predictable state container

    render(){

        return(
            <Router>
                <Suspense fallback= {<div>LOADING..................</div>}>
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
                        <Route path= "/logout" element = {<Logout/>}/>
                        <Route path= "/coupon" element ={<Coupon/>}/>
                        <Route path= "/cancelledOrder" element = {<CancelledOrder/>}/>
                        <Route path= "/review/:id" element = {<Review/>}/>
                        <Route path="/review/write/:id" element = {<ReivewFormComponent/>}/>
                    </Routes>

           
                </Suspense>
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

// 20-10-2023 - Notifications

// Show notification on top of header (Right Corner)
// Design Should show a circular or any small icon, to show number of notifications
// Upon click it should expand in rectangular box and show all the notification messages 
// All notification messages should be clickable
// Upon click of any of them it should reduce the count in notification icon
// It should have two types of notifications - static and dynamic
// Static Notifications To Assist User
// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
// Dynamic Notifications To Assist User
// 1. To Check the number of items added in the Cart
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row



// 19-10-2023 - Logout
// LogOut : Set up logout button/link on TopRight corner, upon click user should be cleared and back to home

/*
// 17-10-2023 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone

// 16-10-2023 - Reorder Page
// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart

// 12-10-2023 - Cancelled Orders
// Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
// Make API to Save and Fetch from CancelledOrders
// Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
// Add a button to Buy Again, (also show a message - This offer is much more exciting)
// Upon Adding this should get appended to the existing Cart that is shown in Carts App


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