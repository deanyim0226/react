import React from "react"


let CartSummary = (props) =>{
    return(
        <>
        <h1>CART SUMMARY</h1>
        <div>
            <p> Total : { props.data.total } </p>
            <p> Total Quantity : {props.data.qty} </p>
        </div>
        </>
    )
}


export default CartSummary