import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, Fragment} from "react";
import {getOrderFromDb} from "../state/order/OrderAction"
import OrderItemComponent from "../pageComponent/Order/OrderItemComponent"
import { deleteOrderFromDb } from "../state/order/OrderAction";

// 11-10-2023 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

const Order = (props) =>{   
    
    let user = useSelector((state)=>state.userReducer.user)
    let orderList = useSelector((state)=> state.orderReducer)
    let dispatchToDb = useDispatch()

    useEffect(()=>{

        dispatchToDb(getOrderFromDb(user._id))

    },[])


    let saveOrder = (evt) =>{

        console.log("after orderlis is " + orderList)
        dispatchToDb(deleteOrderFromDb(orderList._id))
        console.log("after dispatching orderlis is " + order._id)
        evt.preventDefault()
    }
    console.log("orderlist is " + orderList)
    return(

        <>
        <h1>RECENT ORDER</h1>
        <h4>USER ID : {user._id}</h4>
        {
            orderList ?
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            {
                                props.readOnly ?  "" : //bydefault false as boolean default is false
                                <Fragment>
                                    <th>Status</th>
                                    <th>Edit</th>
                                </Fragment>
                            }
                        </tr>
                    </thead>
                    <tbody>
                  
                        {
                           orderList.map((order)=>{
                                return <OrderItemComponent order = {order} key = {order._id}/>
                           })
                        }

                      
                    </tbody>
                        
                   
                </table>
                        
       
                <button onClick={saveOrder}>Save</button>
    
            </>
            : ""
        }
        
        </>
    )

}


export default Order