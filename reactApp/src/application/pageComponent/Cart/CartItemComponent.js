import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import { deleteItemFromCart, updateItemFromCart } from "../../state/cart/CartAction";

let CartItemComponent = (props) =>{

    let item = props.item
    let [quantity, setQuantity] = useState(item.qty)

    let dispatchItem = useDispatch();

    let increaseQuantity = () =>{
        setQuantity(++quantity)
        dispatchItem(updateItemFromCart(item._id, quantity))
    }

    let decreaseQuantity = () =>{
        if(quantity > 1){
            setQuantity(--quantity)
            dispatchItem(updateItemFromCart(item._id, quantity))
        }
    }

    return(
      
         <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.description}</td>
            <td>{item.rating}</td>
            <td>
            {
                props.readOnly ? quantity 
                :
                <Fragment>
                    
                    <td>  <button  onClick={decreaseQuantity}> -  </button></td>
                    <td> &nbsp; {quantity} &nbsp; </td>
                    <td>  <button  onClick={increaseQuantity}> +  </button> </td> 
            
                </Fragment>
                  
            }</td>
            <td>${item.qty*item.price}</td>
            {
                props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button className="btn btn-warning" onClick={()=>dispatchItem(deleteItemFromCart(item._id))}>Remove</button> </td>
                    
                    </Fragment>
            }
        </tr>

    )
}

export default React.memo(CartItemComponent)