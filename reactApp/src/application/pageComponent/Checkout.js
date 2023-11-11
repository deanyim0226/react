import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import CartSummary from "./Cart/CartSummary"
import CartItemComponent from "./Cart/CartItemComponent";
import { emptyCart, saveCartToDb } from "../state/cart/CartAction";
import { saveOrderToDb } from "../state/order/OrderAction";

import CheckoutSummary from "./Checkout/CheckoutSummary"
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
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
    let couponList = useSelector((state)=>state.couponReducer)
    let [discount,setDiscount] = useState(0)

    let nevigate = useNavigate()
    let dispatchToDb = useDispatch()


    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
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
        //clean up the cart after payment
        dispatchToDb(emptyCart())
        cartList = []
        dispatchToDb(saveCartToDb(cartList,user._id))
        //nevigate('/payment')
        evt.preventDefault()
    }

    let recalculate = (cartItems,discount) =>{

        let subTotal = 0, qty = 0, total = 0
        const taxRate = 0.0725

        for(let item of cartItems){
            let sum = item.price * item.qty
            subTotal += sum
            qty += item.qty
        }

        let discountRate = discount * 0.01
        let discountAmount = subTotal * discountRate 
        subTotal = subTotal - discountAmount
        subTotal = Number(subTotal.toFixed(2))
        let tax = taxRate * subTotal
        tax = Number(tax.toFixed(2))
        total = subTotal+ tax

        return {
            subTotal,
            tax,
            qty,
            total,
            discount

        }

    }

    return(
        <>
        <div class="container-fluid">

        <div className="row">
            <div className = "col-sm-8">
            <h1>Checkout PAGE</h1> 
            </div>
            <div className = "col-sm-4">
            <h5>Available Cupons  &nbsp;
                <select defaultValue={discount} onChange={e => setDiscount(e.target.value)}> 
                        
                        {
                            couponList.map((coupon)=>{
        
                                return <option value= {coupon.discount} key={coupon._id}> {coupon.discount} %</option>
                            })
                        }
                </select>
            </h5>
            </div>
       
        </div>

        {
            user && cartList && cartList.length >= 1 ? 

            <>
                <h2>ITEMS INFORMATION</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            cartList.map((item) =>{
                                return <CartItemComponent readOnly = {true} item ={item} key = {item._id}/>
                            })
                        }
                    </tbody>
                </table>

                <CheckoutSummary data = {recalculate(cartList,discount)}/>
    
                    <h2>SHIPPING ADDRESS</h2>

                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>User Info</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <td> {user.firstName} {user.lastName}  <br></br>
                                    {user.address} <br></br>
                                    United States 
                                </td>
                            </tr>
               
                        </tbody>
                    </table>

                    <h2>CARD DETAILS</h2>

                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>CARD INFO</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                            
                                 <td>
                                    <Cards
                                        number={state.number}
                                        expiry={state.expiry}
                                        cvc={state.cvc}
                                        name={state.name}
                                        focused={state.focus}
                                    />
                                 </td>
                                 
                                 <td>
                              
                                        <tr>
                                  
                                            <input
                                            type="number"
                                            name="number"
                                            placeholder="Card Number"
                                            value={state.number}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            />
                                        </tr>
                                        <br>
                                        </br>
                                        <tr>
                                  
                                            <input
                                            type="name"
                                            name="name"
                                            placeholder="Name"
                                            value={state.name}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            />  
                                        </tr>
                                        <br>
                                        </br>
                                        <tr>
                                            
                                            <td>
                                            <input
                                            type="expiry"
                                            name="expiry"
                                            placeholder="Card Number"
                                            value={state.expiry}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            />  
                                            </td>

                                            <td>
                                            <input
                                            type="cvc"
                                            name="cvc"
                                            placeholder="CVC"
                                            value={state.cvc}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            />  
                                            </td>
                                       
                                        </tr>
                                        <br>
                                        </br>
                                        <tr>
                                
                                        <button className="btn btn-warning" onClick={payment}>PLACE ORDER</button>
                                        </tr>

 
                         
                                 </td>
                            
                            </tr>
                   

                        </tbody>
                    </table>

                
            </>

            
            :""
        } 
        </div>
        </>
    )
}

export default Checkout

