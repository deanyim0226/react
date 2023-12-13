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
        <div className="content-wrap" >  
            <div className="container-fluid">
                <h1 className="title">Cancelled Order</h1>
                {   
                    cancelledOrder && cancelledOrder.length >= 1 ?
                    <table  className="table table-light table-bordered ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                
                            {
                                cancelledOrder.map((item)=>{

                                    return <CancelledOrderDetailCoponent item ={item} key={item._id}/>
                                })
                            
                            }
                        </tbody>
                    </table>
                    :""
                }
            </div>
        </div>
        </>
    )

}

export default CancelledOrder