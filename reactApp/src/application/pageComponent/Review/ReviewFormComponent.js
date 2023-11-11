import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { saveDataToDB, getProductFromDb} from "../../state/product/ProductAction"
import { saveReviewToDb } from "../../state/review/ReviewAction"

let ReivewFormComponent = () =>{

    let product = useSelector((state)=>state.productReducer.products)
    let user = useSelector((state)=>state.userReducer.user)
    let contextRef = useRef("") 
    let titleRef = useRef("")
    const [rating, setRating] = useState(0)
 

    let nevigate = useNavigate();
    let {id} = useParams();
    let dispatchToDb = useDispatch()

    useEffect(()=>{
        dispatchToDb(getProductFromDb(id))
    },[])

    let submitReview = () =>{
        
        let context = contextRef.current.value
        let title = titleRef.current.value

        let currentDate = new Date()

        let reviewInfo = {
            reviewId: product._id,
            userId: user._id,
            userInfo: user,
            productInfo: product,
            title,
            context,
            date: currentDate,
            rating
        }

        dispatchToDb(saveReviewToDb(reviewInfo))

        console.log(product)
        console.log("submit the review")
        console.log("context is " + context)
        //make api to store the review to DB and Reducer
        //upon submission successfully nevigate back to the review page 
        //dispatchToDb(saveDataToDB())    
        nevigate("/shop")
    }

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return(
        <>

        <div >
            <h1>Review Form</h1>
        
     
            <div class="form-floating mb-3"> 
                Rating: &nbsp; 
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                            onClick={() => handleRatingChange(star)}
                        >
                        &#9733;
                        </span>
                    ))}
            </div>
    
    
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" ref={titleRef} placeholder="Review Title"/> 
                <label for="floatingInput">Review Title</label>
            </div>
            
            <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3" ref = {contextRef}></textarea>
            <br></br>
            <button onClick={submitReview}>submit your review</button>
        </div>
        
        </>
    )
}

export default ReivewFormComponent