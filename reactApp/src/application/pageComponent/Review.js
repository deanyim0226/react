import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductReviewComponent from "./Review/ProductReviewComponent";
import { fetchDataFromDB } from "../state/product/ProductAction";
import { useParams } from "react-router-dom";
import { getProductFromDb } from "../state/product/ProductAction";
/*
// 17-10-2023 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone
*/


let Review = (props) =>{
    
    let user = useSelector((state)=>state.userReducer.user)
    let product = useSelector((state)=>state.productReducer.products)

    let {id} = useParams();
    let dispatchToDb = useDispatch()

    useEffect(()=>{
        //dispatchToDb(fetchDataFromDB())
        //retreive the product with this id and display its information
        dispatchToDb(getProductFromDb(id))
        console.log("review page for " + id)

    },[])

    /*
        what is your logic? 
        rating and comment
        if a user has its id, then the user can wirte a review
    */

        console.log(product)
        console.log("current Product is" + product.name)

    return(
        <>
        <div className="content-wrap">  

            <div className="container-fluid">

    
                <h1 className="title">Review</h1>
                {
                    product ?

                    <ProductReviewComponent product={product} key = {product._id}/>
                    :            

                    ""
                }
            </div>
        </div>
        </>
    )
}

export default Review