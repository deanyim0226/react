import React from "react";
import OrderDetailComponent from "./OrderDetailComponent";
import { addItemToCart } from "../../state/cart/CartAction";
import { useDispatch } from "react-redux";
import { deleteCancelledOrderFromDb } from "../../state/cancelledOrder/CancelAction";

let CancelledOrderDetailCoponent = (props) =>{

    let item = props.item
// 16-10-2023 - Reorder Page
// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart
    let dispatchToDb = useDispatch()

    let buyAgain = () =>{
        
        for(const item of item.order){
            dispatchToDb(addItemToCart(item))
        }
        
        dispatchToDb(deleteCancelledOrderFromDb(item._id))

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