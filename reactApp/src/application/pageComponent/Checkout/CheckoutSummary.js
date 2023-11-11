import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
let Checkout = (props) =>{
    let couponList = useSelector((state)=>state.couponReducer)
    let [discount,setDiscount] = useState(0)
    return(
        <>
            <h2>SUMMARY</h2>
         
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Total Quantity</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Taxes(7.25%)</th>
                        <th scope="col">Order total(USD)</th>
                       
                    </tr>
                </thead>

                <tbody class="table-group-divider">
                    <tr>
                        <td> ${ props.data.subTotal }  </td>
                        <td> {props.data.qty} </td>
                        <td> {props.data.discount} %</td>
                        <td> ${ props.data.tax }</td>
                        <td> ${ props.data.total } </td>
                
                    </tr>
                </tbody>
            </table>
        
       
        </>
    )
}


export default Checkout