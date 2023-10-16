import React from "react"
import { useState, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItemComponent from "./Cart/CartItemComponent"
import CartSummary from "./Cart/CartSummary"
import {saveCartToDb} from "../state/cart/CartAction"
/*
// Cart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)
*/

const Cart = (props) =>{

    let cartList = useSelector((state) => state.cartReducer)
    let user = useSelector((state) => state.userReducer.user)

    console.log(user)
    console.log(cartList)

    let dispatchToDB = useDispatch()
    let navigate = useNavigate();

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

    let saveCart = (evt) => {

        dispatchToDB(saveCartToDb(cartList,user._id))
        alert("successfully saved the cart for future reference")
        evt.preventDefault();
    }

    let checkOut = (evt) =>{

        navigate('/checkout');
        evt.preventDefault();
    }

    return(

        <>
        <h1>Cart</h1>
 
        {   
            cartList && cartList.length >= 1 ? 
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        {
                            props.readOnly ?  "" : //bydefault false as boolean default is false
                            <Fragment>
                                <th>Remove</th>
                                <th>Edit</th>
                            </Fragment>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map((item) =>{
                            return <CartItemComponent item ={item} key = {item._id}/>
                        })
                    }
                </tbody>
            </table>
            
            <CartSummary data = {recalculate(cartList)}/>
            {
                <Fragment>
                    <button onClick={saveCart}>Save Cart</button>
                    <button onClick={checkOut}>Checkout</button>
                </Fragment>   
            }
            </>
            : <h2>Please add items to cart</h2>
      
        }
       
        </>
        
    )
}


export default Cart