import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import CartSummary from "./Cart/CartSummary"
import CartItemComponent from "./Cart/CartItemComponent";
import { saveOrderToDb } from "../state/order/OrderAction";

/*
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


// 11-10-2023 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

const Checkout = () =>{

    let user = useSelector((state) => state.userReducer.user)
    let cartList = useSelector((state) => state.cartReducer)
    let nevigate = useNavigate()

    let dispatchToDb = useDispatch()

    let back = (evt) =>{
        nevigate('/cart')
        evt.preventDefault()
    }

    let payment =(evt) =>{

        alert("Thankyou for the payment, your items under process!")
        const orderDate = new Date()

        const orderInformation = {
            userid: user._id,
            order: cartList,
            date: orderDate
          
        }

        dispatchToDb(saveOrderToDb(orderInformation))

        //nevigate('/payment')
        evt.preventDefault()
    }

    let recalculate = (cartItems) =>{

        let total = 0, qty = 0

        for(let item of cartItems){
            let sum = item.price * item.qty
            total += sum
            qty += item.qty
        }

        return {
            total,
            qty
        }

    }

    return(
        <>
        <h1>Checkout PAGE</h1>
        {
            user && cartList && cartList.length >= 1 ? 

            <>
                <h2>ITEMS INFORMATION</h2>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Total</th>
              
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map((item) =>{
                            return <CartItemComponent readOnly = {true} item ={item} key = {item._id}/>
                        })
                    }
                </tbody>
            </table>
                <CartSummary data = {recalculate(cartList)}/>
            
                <h2>USER DETAIL</h2>
                <p>Name: {user.firstName + user.lastName} </p>
                <p>Address: {user.address} </p>
                <p>We will deliver products to above information </p>
                
                <button onClick={back}>Back</button>
                <button onClick={payment}>Payment</button>
            </>

            
            :""
        } 
        </>
    )
}

export default Checkout

