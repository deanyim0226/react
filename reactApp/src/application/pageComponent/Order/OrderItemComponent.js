import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect,Fragment } from "react";
import OrderDetailComponent from "./OrderDetailComponent";
import { deleteOrderFromDb } from "../../state/order/OrderAction";
import { addCancelledOrderToDb, addCancelledOrder } from "../../state/cancelledOrder/CancelAction";
import {updateUserToDb} from "../../state/user/UserAction"

// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

let OrderItemComponent = (props) =>{

    let user = useSelector((state)=>state.userReducer.user)

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
  
// 17-10-2023 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone

/*
in the review page, all the products are visible once again 
it has

*/
    let reviewable = () =>{
        //user should be able to write a review
        console.log("write review") 
        console.log(order.order)
        let reviewableProduct = []

        for(let i =0; i<order.order.length; i++){

            reviewableProduct.push(order.order[i]._id)
        }

        if(user.email.length >= 1){
           
            let updatedUser = {
                email: user.email, 
                reviewableProduct
            }
            dispatchToDb(updateUserToDb(updatedUser))
        }
        
        console.log("reviwable " + reviewableProduct )
        /*
        user has a field where user can have accessibility to write product 
        */
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
                <td> <button className="btn btn-warning" onClick={cancel}>Cancel</button> </td>
                : <td> <button className="btn btn-warning" onClick={reviewable}>Reviewable</button></td>  
            }
        </tr>

   
 
       
 
    )
}

export default React.memo(OrderItemComponent);