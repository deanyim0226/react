import React, {Component, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import Home from "./commonComponent/Home";
import Qa from "./pageComponent/QA";
import Login from "./pageComponent/Login";
import Register from "./pageComponent/Register";

import Product from "./pageComponent/Product";
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
                        <Route path ="/qa" element = {<Qa/>}/>
                        <Route path = "/login" element = {<Login/>}/>
                        <Route path = "/register" element = {<Register/>}/>
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