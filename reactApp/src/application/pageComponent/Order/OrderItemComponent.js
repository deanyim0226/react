import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import OrderDetailComponent from "./OrderDetailComponent";
import { deleteOrder } from "../../state/order/OrderAction";
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

    let cancel = (evt) => {
        console.log("you cliecked cancel")
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
                <td> <button onClick={()=>dispatchToDb(deleteOrder(order._id))}>cancel</button> </td>
                : <td></td>  
            }
        </tr>

   
 
       
 
    )
}

export default OrderItemComponent;