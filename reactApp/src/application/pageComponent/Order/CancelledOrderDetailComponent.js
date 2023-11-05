import React from "react";
import OrderDetailComponent from "./OrderDetailComponent";
let CancelledOrderDetailCoponent = (props) =>{

    let item = props.item
// 16-10-2023 - Reorder Page
// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart

    let buyAgain = () =>{
        console.log("buy agian is clciked")
    }

    console.log(item.order.date)
    return(
        <>
            <tr>
                <td>
                    {
                        item.order.map((item)=>{
                            return <OrderDetailComponent item={item} key ={item._id}/>
                        })
                    }    
                </td>
                <td>{item.date}</td>

                <td><button onClick={buyAgain}>BuyAgain</button></td>
            </tr> 
        </>
    )

}

export default CancelledOrderDetailCoponent