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
*/