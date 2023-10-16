import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductItemComponent from "./ProductItemComponent";
import { fetchDataFromDB } from "../../state/product/ProductAction";

let DisplayProduct = (props)=>{

    let products = useSelector((state)=>state.productReducer.products);
    
    console.log(products)
    let dispatchToDB = useDispatch();

    useEffect(()=>{
     
        dispatchToDB(fetchDataFromDB()) 
    },
    [])

    return(
        <>
            {
                products && products.length >= 1 ? 
                    products.map((product)=>{
                        return <ProductItemComponent product={product} key ={product._id} />
                    })

                :<h2>No Products To Show</h2>
            }
        </>
    )
}

export default DisplayProduct;