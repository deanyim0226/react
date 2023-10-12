import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import { addItemToCart } from "../../state/cart/CartAction"

let ProductItemComponent = (props) =>{
    let user = useSelector((state) => state.userReducer.user);

    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product )=>{
        if(!user._id){
            alert("LOG IN TO ADD ITEM TO YOUR CART")
        }else{
            dispatchToAddProduct(addItemToCart(product))
        }
    }

    return(
   
        <ul className="product">
    
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {props.product.name}
                {showHide ? 
                    <ul>
                    <li> price: {props.product.price}</li>
                    <li> description: {props.product.description}</li>
                    <li> rating: {props.product.rating}</li> 
                    
                    <button onClick={()=>{addProductToCart(props.product)}}>Add To Cart</button>
                    
                    </ul>
                : 
                " "} 
            </li>
            
        </ul>
            
 
    )
}

export default ProductItemComponent