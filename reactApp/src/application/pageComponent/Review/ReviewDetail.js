import React from "react"
import Product from "../Product"
import { useSelector, useDispatch } from "react-redux"

let ReviewDetail = (props) =>{

    let reviewInfo = props.item
    let user = useSelector((state)=>state.userReducer.user)

    console.log(reviewInfo)

    /*
// 17-10-2023 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone
*/
   

    return (
        <>
        <div class="card text-center">
            <div class="card-header">
                <div className="row">
                    <div className="col">
                        {user.firstName} {user.lastName}
                    </div>
                    <div className="col">
                    <h5 class="card-title">{reviewInfo.title}</h5>
                    </div>  
                    <div className="col">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{ color: star <= reviewInfo.rating ? 'gold' : 'gray' }}
            
                        >
                        &#9733;
                        </span>
                    ))}
                    </div>
                </div>
            </div>
            <div class="card-body">
               
                <p class="card-text">
                    {
                        reviewInfo.context
                    }
                </p>
                
            </div>
            <div class="card-footer text-muted">
                {
                    reviewInfo.date
                }
            </div>
        </div>
        </>
    )
}

export default ReviewDetail