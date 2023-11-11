import React from "react"
import { useState, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItemComponent from "./Cart/CartItemComponent"
import CartSummary from "./Cart/CartSummary"
import {saveCartToDb} from "../state/cart/CartAction"
import Coupon from "./Coupon"

import CouponItemCommponent from "./Coupon/CouponItemComponent";

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


    useEffect(()=>{
      
    },[])

    let recalculate = (cartItems) =>{

        let total = 0, qty = 0, items ="", products = new Set()


        for(let item of cartItems){
            let sum = item.price * item.qty
            total += sum
            qty += item.qty

            products.add(item.name)
        }

        for(const name of products){
            items += name
            items += " "
        }
        return {
            items,
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
        <div class="container-fluid">

        <h1 class="align-middle">Cart</h1>
        {   
            cartList && cartList.length >= 1 ? 
            <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" >Item</th>
                        <th scope="col" >Price</th>
                        <th scope="col">Description</th>
                        <th scope="col" >Rating</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">SubTotal</th>
                        {
                            props.readOnly ?  "" : //bydefault false as boolean default is false
                            <Fragment>
                                <th scope="col">Action</th>
                            </Fragment>
                        }
                    </tr>
                </thead>
                <tbody  class="table-group-divider">
                    {
                        cartList.map((item) =>{
                            return <CartItemComponent item ={item} key = {item._id}/>
                        })
                    }
                    <Fragment>
                    <button className="btn btn-warning" onClick={saveCart}>Save Cart</button>
                    </Fragment>   
                </tbody>
            </table>
            
            <CartSummary data = {recalculate(cartList)}/>
            {
                <Fragment>
                    <button className="btn btn-warning" onClick={checkOut}>Checkout</button>
                </Fragment>   
            }
            </>
            : <h2>Please add items to cart</h2>
            
        }
        </div>
        </>
        
    )
}


export default Cart