import React from "react";


let Checkout = (props) =>{

    return(
        <>
            <h1>CHECKOUT SUMMARY</h1>
            <div>
                <p> Total Quantity : {props.data.qty} </p>
                <p> Subtotal : ${ props.data.subTotal } </p>
                <p> Taxes : ${ props.data.tax } </p>
                <p> Order total(USD) : ${ props.data.total } </p>
            </div>
        </>
    )
}


export default Checkout