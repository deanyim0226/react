import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import { deleteItemFromCart, updateItemFromCart } from "../../state/cart/CartAction";

let CartItemComponent = (props) =>{

    let item = props.item
    let [quantity, setQuantity] = useState(item.qty)

    let dispatchItem = useDispatch();

    return(
      
         <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.rating}</td>
            <td>
            {
        
                <input type="text" value={quantity} onChange={(evt)=>{setQuantity(evt.target.value)}}></input>    
            }</td>
            <td>{item.qty*item.price}</td>
            {
                //props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button onClick={()=>dispatchItem(deleteItemFromCart(item._id))}>Remove</button> </td>
                        <td><button onClick={()=>dispatchItem(updateItemFromCart(item._id, quantity))}>Edit</button></td>
                    </Fragment>
            }
        </tr>

    )
}

export default CartItemComponent