import React from "react";
import { useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewDetail from "./ReviewDetail";
import ReivewFormComponent from "./ReviewFormComponent"
import {getReviewsFromDb} from "../../state/review/ReviewAction"

let ProductReviewComponent = (props) =>{
    
    let product = props.product
    let reviews = useSelector((state)=>state.reviewReducer)
    let user = useSelector((state)=>state.userReducer.user)

    let dispatchToDb = useDispatch()
    let nevigate = useNavigate()

    const [showHide, toggleShowHide] = useState(false)
    const [allowingReview, setAllowingReview] = useState(false)

    useEffect(()=>{
        //update review
        dispatchToDb(getReviewsFromDb(product._id))

        let reviewableProducts = user.reviewableProduct
        if(reviewableProducts.includes(product._id)){
            setAllowingReview(true)
        }

    },[])

    let performWriting = () =>{
        nevigate("/review/write/"+product._id)
    }


    console.log("reviews are " + reviews)

    return(
        <>
            <div className="card border-dark mb-3">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                <div className="card-body">
                    <p className="product" onClick={()=>toggleShowHide(!showHide)}>
                    <h4 className="card-title">{product.name}</h4>
                   
                        {showHide ? 

                            <div>
                          
                                <p className="card-text"> Rating: {product.rating}</p>
                                {
                                    allowingReview ? 
                                    <a style={{ cursor: 'pointer', color: "DarkSlateGray"}} onClick={performWriting}>Write a Review</a>
                                    :""
                                }
                                
                                <div className="card-footer bg-transparent border-success"></div>
                                
                                <div>
                                   
                                    {
                                        
                                        reviews ?

                                        reviews.map((item) =>{
                                            return <ReviewDetail item ={item} key ={item._id}/>
                                        })
                                 
                                        : "notthing"
                                        
                                    }
                                
                                </div>  
                            </div>

                
                              
                       
                        : 
                        " "} 
                    </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )

}


export default ProductReviewComponent