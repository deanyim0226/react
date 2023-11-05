import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCancelledOrderFromDb } from "../state/cancelledOrder/CancelAction";

import OrderDetailComponent from "./Order/OrderDetailComponent";
import CancelledOrderDetailCoponent from "./Order/CancelledOrderDetailComponent";

let CancelledOrder = (props) =>{
    let user = useSelector((state) => state.userReducer.user)
    let cancelledOrder = useSelector((state)=>state.cancelReducer)
    let dispatchToDb = useDispatch()

    useEffect(()=>{
        console.log("use effect is called")
        dispatchToDb(getCancelledOrderFromDb(user._id))    
    },[])

// 12-10-2023 - Cancelled Orders
// Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
// Make API to Save and Fetch from CancelledOrders
// Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
// Add a button to Buy Again, (also show a message - This offer is much more exciting)
// Upon Adding this should get appended to the existing Cart that is shown in Carts App
    console.log(cancelledOrder)

    return (
        <>
        <h1>Cancelled Order</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
      
                {
                    cancelledOrder.map((item)=>{

                        return <CancelledOrderDetailCoponent item ={item} key={item._id}/>
                    })
                
                }
            </tbody>
        </table>
        </>
    )

}

export default CancelledOrder