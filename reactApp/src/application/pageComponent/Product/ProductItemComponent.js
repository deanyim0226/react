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
        
        <div className="card border-dark mb-3">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                <div className="card-body">
                    <p className="product" onClick={()=>toggleShowHide(!showHide)}>
                    <h4 className="card-title">{props.product.name}</h4>
                        {showHide ? 
                            <div>

                                <p className="card-text"> Description: {props.product.description}</p>
                                <p className="card-text"> Price: {props.product.price}</p>
                                <p className="card-text"> Rating: {props.product.rating}</p> 
                                <div className="card-footer bg-transparent border-success">
                                <button className="btn btn-warning" onClick={()=>{addProductToCart(props.product)}}>Add To Cart</button>
                                </div>

                            </div>
                        : 
                        " "} 
                    </p>
                </div>
            </div>
            </div>
        </div>
  
    )
}

export default React.memo(ProductItemComponent)