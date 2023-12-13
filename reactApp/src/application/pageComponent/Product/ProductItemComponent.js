import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import { addItemToCart } from "../../state/cart/CartAction"
import Review from "../Review"

let ProductItemComponent = (props) =>{
    let user = useSelector((state) => state.userReducer.user);
    let product = props.product
    let [showHide, toggleShowHide] = useState(false)
  
    let dispatchToAddProduct = useDispatch();
    let nevigate = useNavigate()

    useEffect(()=>{

    },[])

    let addProductToCart = ( product )=>{
        if(!user._id){
            alert("LOG IN TO ADD ITEM TO YOUR CART")
        }else{
            dispatchToAddProduct(addItemToCart(product))
        }
    }

    let viewReview = ( product ) =>{
        nevigate("/review/"+product._id)
    }

    return(
        <div className="content-wrap" >
        <div className="card border-dark mb-3">
    
            <img src={props.product.url} class="card-img-top" alt="..." onClick={()=>toggleShowHide(!showHide)}/>
         
  
                <div className="card-body">
                    <p className="product" onClick={()=>toggleShowHide(!showHide)}>
                    <h4 className="card-title">{product.name}</h4>
                        {showHide ? 
                            <div>

                                <p className="card-text"> <b>Description:</b> {product.description}</p>
                                <p className="card-text"> <b>Price: </b> ${product.price}</p>
                                <p className="card-text"> <b>Rating:</b> 
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        style={{ color: star <= product.rating ? 'gold' : 'gray' }}
                        
                                    >
                                    &#9733;
                                    </span>
                                ))}
                                {product.rating}
                                 </p> 
                                <div className="card-footer bg-transparent border-success">
                                    
                                <div className="row">
                                    <div className="col">
                                    <button className="btn btn-warning" onClick={()=>{addProductToCart(props.product)}}>Add To Cart</button>
                                    </div>
                                    <div className="col">
                                    <button className="btn btn-warning" onClick={()=>{viewReview(props.product)}}>View Review</button>
                                    </div>
                                </div>

                                </div>

                            </div>
                        : 
                        " "} 
                    </p>
                </div>
            </div>
        
            </div>
  
    )
}

export default React.memo(ProductItemComponent)