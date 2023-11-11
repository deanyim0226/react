import React, { useCallback } from "react";
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


// 12-10-2023 - Cancelled Orders
// Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
// Make API to Save and Fetch from CancelledOrders
// Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
// Add a button to Buy Again, (also show a message - This offer is much more exciting)
// Upon Adding this should get appended to the existing Cart that is shown in Carts App

const Order = (props) =>{   
    
    let user = useSelector((state)=>state.userReducer.user)
    let orderList = useSelector((state)=> state.orderReducer)
    let dispatchToDb = useDispatch()

    useEffect(()=>{

        dispatchToDb(getOrderFromDb(user._id))

    },[])

    //useCallback() memorize input values and avoid re-rendering until there is a change in input values
    //useMemo() memorize data and calculates only if the input value is changed.

    console.log("orderlist is " + orderList)
    return(

        <>
        <div className="container-fluid">
        <h1>RECENT ORDER</h1>
        <h4>USER NAME : {user.lastName} {user.firstName}</h4>
        {
            orderList ?
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            {
                                props.readOnly ?  "" : //bydefault false as boolean default is false
                                <Fragment>
                                    <th>Status</th>
                                    <th>Action</th>
                                </Fragment>
                            }
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                  
                        {
                           orderList.map((order)=>{
                               return <OrderItemComponent order = {order} key = {order._id}/>
                            
                           })
                        }                     
                    </tbody>
                </table>
                        
            </>
            : ""
        }
        </div>
        </>
    )

}


export default Order