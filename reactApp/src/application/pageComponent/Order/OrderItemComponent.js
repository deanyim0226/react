import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect,Fragment } from "react";
import OrderDetailComponent from "./OrderDetailComponent";
import { deleteOrderFromDb } from "../../state/order/OrderAction";
import { addCancelledOrderToDb, addCancelledOrder } from "../../state/cancelledOrder/CancelAction";

// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

let OrderItemComponent = (props) =>{

    let order = props.order
    let status = false
    let dispatchToDb = useDispatch()
    
    let calculateDate = () =>{
        
        let DateOfToday = new Date()
        let DateOfOrder = new Date(order.date.toString())

        let difference = DateOfToday.getTime() - DateOfOrder.getTime()
        
        let differenceInDays = difference / (1000 * 3600 * 24)

        if(differenceInDays >= 2){
            status = true
        }
    }
    


    // 12-10-2023 - Cancelled Orders
    // Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
    // Make API to Save and Fetch from CancelledOrders
    // Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
    // Add a button to Buy Again, (also show a message - This offer is much more exciting)
    // Upon Adding this should get appended to the existing Cart that is shown in Carts App

    let cancel = (evt) => {
        console.log("you cliecked cancel deleting " + order._id)
        console.log(order.userid)
        console.log(order.order)
        dispatchToDb(deleteOrderFromDb(order._id))
        let currentTime = new Date()
     
        let obj ={
            userid: order.userid,
            order: order.order,
            date: currentTime
        }

        console.log("focuting " + obj)
        dispatchToDb(addCancelledOrderToDb(obj))
        //need to set up cancelled order 
        //make api to save and fetch the cancelled order 
        //make a page that shows all the orders that have been cancelled 
        //button to buy again then it will append to the existing cart 

        evt.preventDefault()
    }
    console.log(order)
    return(

        <tr>
            {calculateDate()}
            <td>
            {
                order.order.map((item)=>{
                    return <OrderDetailComponent item ={item} key ={item._id}/>
                })            
            }
            </td>
            <td>{order.date}</td>
            {   

                !status ?
                <td> 
                    Processing
                </td>
                : 
                <td>
                    Delivered
                </td>
            }
          
            {
                !status ?
                <td> <button onClick={cancel}>cancel</button> </td>
                : <td></td>  
            }
        </tr>

   
 
       
 
    )
}

export default React.memo(OrderItemComponent);