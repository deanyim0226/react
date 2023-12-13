import React from "react";
import { useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewDetail from "./ReviewDetail";
import ReivewFormComponent from "./ReviewFormComponent"
import {getReviewsFromDb} from "../../state/review/ReviewAction"
import {dispatchUpdatedProduct} from "../../state/product/ProductAction"
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
        //dispatchToDb(getReviewsFromDb(product._id))
        dispatchToDb(getReviewsFromDb(product._id))

        let reviewableProducts = user.reviewableProduct
        if(reviewableProducts.includes(product._id)){
            setAllowingReview(true)
        }
        
        if(reviews.length > 1){

            let numberOfReviews = reviews.length
            let sum = 0
            console.log("size of reviews is " + numberOfReviews)
            
            reviews.forEach(element => {
                
                if(!isNaN(element.rating)){

                    sum += parseFloat(element.rating)
                }
        
            });

            console.log("total is " + sum)
            let newRating = sum / parseFloat(numberOfReviews)
            //send newrating to db

            dispatchToDb(dispatchUpdatedProduct(product,newRating.toFixed(2)))
        }
        

    },[reviews.length])

    let performWriting = () =>{
        nevigate("/review/write/"+product._id)
    }

    return(
        <>

            <div className="card border-dark mb-3">
            <div class="row g-0">
            <div class="col-md-4">
            <img src={product.url} class="img-fluid rounded-start" alt="..."/>
            
            </div>
            <div class="col-md-8">
                <div className="card-body">
                    <p className="product" onClick={()=>toggleShowHide(!showHide)}>
                    <h4 className="card-title">{product.name}</h4>
                   
                        {showHide ? 

                            <div>
                        
                                <p className="card-text"> Ovarall Rating: 
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